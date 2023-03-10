import { Injectable, OnDestroy            } from '@angular/core';
import { INotificationMessage             } from '../entities/notification.interface';
import { Subscription, delay, tap, timer  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService implements OnDestroy {
  
  private seconds     : number = 5;
  private supTimer?   : Subscription;
  messages            : Array<INotificationMessage> = [];

  add(entity : INotificationMessage) : void{
    entity.Id = (this.messages.length + 1);
    this.messages.push(entity);
    this.remove(entity);
  }

  private remove(entity : INotificationMessage) : void{
    this.supTimer = 
      timer((this.seconds * 1000) - 1000)
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