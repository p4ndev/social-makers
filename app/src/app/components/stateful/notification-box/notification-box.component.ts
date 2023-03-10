import { Component            } from '@angular/core';
import { ENotificationStatus  } from 'src/app/entities/notification.enum';
import { NotificationService  } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification-box',
  templateUrl: './notification-box.component.html',
  styleUrls: ['./notification-box.component.sass']
})
export class NotificationBoxComponent {
  
  constructor(public notification : NotificationService) { }

  isSuccess = (status : ENotificationStatus) : boolean => status === ENotificationStatus.Success;
  isError   = (status : ENotificationStatus) : boolean => status === ENotificationStatus.Error;
  isWarning = (status : ENotificationStatus) : boolean => status === ENotificationStatus.Warning;

}
