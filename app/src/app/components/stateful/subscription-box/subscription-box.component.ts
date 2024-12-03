import { Component, Input, OnDestroy  } from '@angular/core';
import { Subscription, timer          } from 'rxjs';

import { IShortlist                   } from 'src/app/entities/shortlist.entity';
import { ValidatorService             } from 'src/app/services/validator.service';
import { ShortlistEventService        } from 'src/app/services/events/shortlist.service';
import { NotificationEventService     } from 'src/app/services/events/notification.service';
import { ShortlistApiService          } from 'src/app/services/feedback/shortlist-api.service';

@Component({
  selector: 'app-subscription-box',
  styleUrls: ["./subscription-box.component.sass"],
  templateUrl: './subscription-box.component.html'
})
export class SubscriptionBoxComponent implements OnDestroy{

  private sup           : Array<Subscription> = [];
  public content        : string              = "";
  private model!        : IShortlist;
  @Input() public id!   : number;

  constructor(
    private validator       : ValidatorService,
    public  shortlistApi    : ShortlistApiService,
    private notification    : NotificationEventService,
    public  shortlistEvent  : ShortlistEventService
  ){
    this.content = this.init();
  }

  private init          = () : string   => "";
  private validateId    = () : boolean  => this.validator.Id(this.model.ProjectId);
  private validateEmail = () : boolean  => this.validator.Email(this.model.Content);

  private errorNotification     = (message? : string) : void => 
    this.notification.addError(!message ? this.validator.message! : message);

  private waitingNotification   = () : void => 
    this.notification.addWarning("Please wait, sending data...");

  private successNotification   = (slug : string) : void => 
    this.notification.addSuccess(slug + " successfully");

  private setModel() : void{    
    this.model = {
      ProjectId : this.id,
      Content   : this.content
    };
  }

  onCancel() : void {
    this.shortlistEvent.Toggle();
  }

  onSubscribe() : void {
    
    this.setModel();

    if(!this.validateId())      return this.errorNotification();
    if(!this.validateEmail())   return this.errorNotification();

    this.waitingNotification();

    this.sup.push(
      timer(500).subscribe(() =>
        this.shortlistApi.optInAsync(this.model).then(() => {
          this.successNotification("Subscribe");
          this.content = this.init();
          this.onCancel();
        }, (m : string) => this.errorNotification(m))
      )
    );

  }

  onUnsubscribe() : void {

    this.setModel();

    if(!this.validateId())      return this.errorNotification();
    if(!this.validateEmail())   return this.errorNotification();

    this.waitingNotification();

    this.sup.push(
      timer(500).subscribe(() =>
        this.shortlistApi.optOutAsync(this.model).then(() => {
          this.successNotification("Unsubscribe");
          this.content = this.init();
          this.onCancel();
        }, (m : string) => this.errorNotification(m))
      )
    );

  }

  ngOnDestroy() : void {
    this.sup.forEach(i => i.unsubscribe());
    this.shortlistApi.ngOnDestroy();
  }

}
