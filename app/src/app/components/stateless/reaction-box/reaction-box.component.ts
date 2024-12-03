import { Component, Input } from '@angular/core';
import { ShortlistEventService } from 'src/app/services/events/shortlist.service';

@Component({
  selector: 'app-reaction-box',
  templateUrl: './reaction-box.component.html'
})
export class ReactionBoxComponent {

  @Input() id!      : number;
  @Input() price    : string = "434,76";

  constructor(private shortlistEvent : ShortlistEventService){}

  public buy = () : boolean | void => this.shortlistEvent.Toggle();
  
}
