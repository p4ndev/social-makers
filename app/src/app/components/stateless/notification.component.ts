import { Component, Inject, Input } from '@angular/core';
import { NOTIFICATION_CONFIG } from 'src/app/settings/notification.config';

@Component({
  selector: 'app-notification-success',
  template: `
    <div [class]="helper.Wrap + ' text-green-800 bg-green-100 notification-success'" [ngClass]="cssClass">
      <i [class]="helper.Icon + ' fa-check'"></i> {{ label }}
    </div>`
})
class NotificationSuccessComponent {
  @Input() label? : string;
  @Input() cssClass? : string;
  constructor(@Inject("NOTIFICATION_CONFIG") public helper : typeof NOTIFICATION_CONFIG) { }
}

@Component({
  selector: 'app-notification-error',
  template: `
    <div [class]="helper.Wrap + ' text-red-800 bg-red-100 notification-error'" [ngClass]="cssClass">
      <i [class]="helper.Icon + ' fa-xmark'"></i> {{ label }}
    </div>`
})
class NotificationErrorComponent {
  @Input() label? : string;
  @Input() cssClass? : string;
  constructor(@Inject("NOTIFICATION_CONFIG") public helper : typeof NOTIFICATION_CONFIG) { }
}

@Component({
  selector: 'app-notification-warning',
  template: `
    <div [class]="helper.Wrap + ' text-yellow-800 bg-yellow-100 notification-warning'" [ngClass]="cssClass">
      <i [class]="helper.Icon + ' fa-triangle-exclamation'"></i> {{ label }}
    </div>`
})
class NotificationWarningComponent {
  @Input() label? : string;
  @Input() cssClass? : string;
  constructor(@Inject("NOTIFICATION_CONFIG") public helper : typeof NOTIFICATION_CONFIG) { }
}

export{ NotificationSuccessComponent, NotificationErrorComponent, NotificationWarningComponent }