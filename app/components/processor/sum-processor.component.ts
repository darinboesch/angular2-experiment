import {
  Component,
  OnInit,
  ElementRef,
  EventEmitter,
} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {ProcessorService} from './processor.service';
import {pField} from './p-field';

@Component({
  selector: 'dlb-sum-processor',
  templateUrl: 'app/components/processor/sum-processor.component.html'
})
export class SumProcessorComponent implements OnInit {
  loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  results: EventEmitter<pField[]> = new EventEmitter<pField[]>();

  constructor(public processorService: ProcessorService,
              private el: ElementRef) {
  }

  ngOnInit(): void {
    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value) // extract the value of the input
      .filter((text: string) => text.length > 1) // filter out if empty
      .debounceTime(400)                         // only once every 250ms
      .do(() => this.loading.emit(true))         // enable loading
      // search, discarding old events if new input comes in
      .map((fields: pField[]) => {
        let f = [
          new pField({id: 1, value: fields}),
          new pField({id: 2, value: '100'})
        ];
        return this.processorService.sum(f); }
      )
      .switch()
      // act on the return of the search
      .subscribe(
        (results: pField[]) => { // on sucesss
          this.loading.emit(false);
          this.results.emit(results);
        },
        (err: any) => { // on error
          console.log(err);
          this.loading.emit(false);
        },
        () => { // on completion
          this.loading.emit(false);
        }
      );
  }
}
