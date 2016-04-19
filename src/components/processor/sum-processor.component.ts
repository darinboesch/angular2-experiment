import {
  Component,
  ElementRef,
} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {ProcessorService} from './processor.service';
import {pField} from './p-field';

@Component({
  selector: 'dlb-sum-processor',
  templateUrl: 'src/components/processor/sum-processor.component.html'
})
export class SumProcessorComponent {
  fields: pField[];

  constructor(public processorService: ProcessorService,
              private el: ElementRef) {

    processorService.fields
      .subscribe(
        fields => this.fields = fields,
        err => console.error('Error ' + err)
      );

    const eventStream = Observable.fromEvent(el.nativeElement, 'keyup')
      .map((e: any) => e.target.value) // extract the value of the input
      .filter((text: string) => text.length > 0) // filter out if empty
      .debounceTime(400);

    eventStream.subscribe(input => this.processorService.processSum(this.fields));
  }
}
