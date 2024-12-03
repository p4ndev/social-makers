import { INotificationMessage             } from '../../entities/notification.entity';
import { NOTIFICATION_CONFIG              } from '../../settings/notification.config';
import { ENotificationStatus              } from '../../enums/notification.enum';
import { Inject, Injectable, OnDestroy    } from '@angular/core';
import { Subscription, delay, tap, timer  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationEventService implements OnDestroy {
  
  private supTimer?   : Subscription;
  messages            : Array<INotificationMessage> = [];

  constructor(@Inject("NOTIFICATION_CONFIG") private helper : typeof NOTIFICATION_CONFIG) { }

  add(entity : INotificationMessage) : void{
    entity.Id = (this.messages.length + 1);
    this.messages.push(entity);
    this.remove(entity);
  }

  addSuccess(message : string) : void {
    let entity : INotificationMessage = {
      Content: message,
      Status: ENotificationStatus.Success
    }
    this.add(entity);
  }

  addWarning(message : string) : void {
    let entity : INotificationMessage = {
      Content: message,
      Status: ENotificationStatus.Warning
    }
    this.add(entity);
  }

  addError(message : string) : void {
    let entity : INotificationMessage = {
      Content: message,
      Status: ENotificationStatus.Error
    }
    this.add(entity);
  }

  private remove(entity : INotificationMessage) : void{
    this.supTimer = 
      timer((this.helper.Seconds * 1000) - 1000)
        .pipe(
          tap(() => entity.CssClass = "off"),
          delay(1000),
          tap(() => {
            let idx = this.messages.findIndex(x => x.Id === entity.Id);
            this.messages.splice(idx, 1);
          })
        ).subscribe();
  }

  ngOnDestroy() : void {
    this.messages = [];
    this.supTimer?.unsubscribe();
  }

}