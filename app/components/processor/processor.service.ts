import {Injectable, Inject} from 'angular2/core';
import {pField} from './p-field';
import {HttpClient} from '../../common/http-client';
import {Subject, Observable} from 'rxjs/Rx';
import {Config, APP_CONFIG} from '../app.config';

interface IFieldsOperation extends Function {
  (fields: pField[]): pField[];
}

@Injectable()
export class ProcessorService {
  // data streams
  fields: Observable<pField[]>;
  updates: Subject<any> = new Subject<any>();
  newFields: Subject<pField> = new Subject<pField>();

  // action streams
  create: Subject<pField> = new Subject<pField>();
  set: Subject<pField> = new Subject<pField>();

  constructor(
    private _http: HttpClient,
    @Inject(APP_CONFIG) private _config: Config
  ) {
      this.fields = this.updates
        .scan((fields: pField[], operation: IFieldsOperation) => {
            return operation(fields);
          }, [])
        .publishReplay(1)
        .refCount();

    this.create
      .map(function(opFields: pField[]): IFieldsOperation {
        return (fields: pField[]) => {
          return fields.concat(opFields);
        };
      })
      .subscribe(this.updates);

    this.set
      .map(function(opFields: pField[]): IFieldsOperation {
        return (fields: pField[]) => {
          return fields.map(function(fld) {
            let opFld = opFields.filter(function(of) {
              return  of.id === fld.id ? of : undefined;
            });
            return opFld.length > 0 ? opFld[0] : fld;
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
  
  processSum(fields: pField[]) {
    this._http.post(this._config.apiProcessor, JSON.stringify(fields))
      .map(response => <any>response.json())
      .subscribe(fields => this.set.next(fields));
  }
}

