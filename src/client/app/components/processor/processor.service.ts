import {Injectable, Inject} from 'angular2/core';
import {ProcessorField} from './processor-field';
import {HttpClient} from '../../common/http-client';
import {Subject, Observable} from 'rxjs/Rx';
import {Config, APP_CONFIG} from '../app.config';

interface IFieldsOperation extends Function {
  (fields: ProcessorField[]): ProcessorField[];
}

@Injectable()
export class ProcessorService {
  // data streams
  fields: Observable<ProcessorField[]>;
  updates: Subject<any> = new Subject<any>();
  newFields: Subject<ProcessorField> = new Subject<ProcessorField>();

  // action streams
  create: Subject<ProcessorField> = new Subject<ProcessorField>();
  set: Subject<ProcessorField[]> = new Subject<ProcessorField[]>();

  constructor(
    private _http: HttpClient,
    @Inject(APP_CONFIG) private _config: Config
  ) {
      this.fields = this.updates
        .scan((fields: ProcessorField[], operation: IFieldsOperation) => {
            return operation(fields);
          }, [])
        .publishReplay(1)
        .refCount();

    this.create
      .map(function(opField: ProcessorField): IFieldsOperation {
        return (fields: ProcessorField[]) => {
          return fields.concat(opField);
        };
      })
      .subscribe(this.updates);

    this.set
      .map(function(opFields: ProcessorField[]): IFieldsOperation {
        return (fields: ProcessorField[]) => {
          return fields.map(function(fld) {
            let opFld = opFields.find(function(of) {
              return  of.id === fld.id;
            });
            return opFld || fld;
          });
        };
      })
      .subscribe(this.updates);

    this.newFields
      .subscribe(this.create);

    // initialize the fields
    this.resetFields();
  }

  resetFields() {
    this._http.get(this._config.apiSets + '/1')
      .map(response => <any>response.json().fields)
      .subscribe(fields => this.newFields.next(fields));
  }

  processSum(fields: ProcessorField[]) {
    this._http.post(this._config.apiProcessor, JSON.stringify(fields))
      .map(response => <any>response.json())
      .subscribe(fields => this.set.next(fields));
  }
}

