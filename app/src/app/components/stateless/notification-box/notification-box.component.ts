import { Component                  } from '@angular/core';
import { ENotificationStatus        } from 'src/app/enums/notification.enum';
import { NotificationEventService   } from 'src/app/services/events/notification.service';

@Component({
  selector: 'app-notification-box',
  templateUrl: './notification-box.component.html',
  styleUrls: ['./notification-box.component.sass']
})
export class NotificationBoxComponent {
  
  constructor(public notification : NotificationEventService) { }

  isSuccess = (status : ENotificationStatus) : boolean => status === ENotificationStatus.Success;
  isError   = (status : ENotificationStatus) : boolean => status === ENotificationStatus.Error;
  isWarning = (status : ENotificationStatus) : boolean => status === ENotificationStatus.Warning;

}