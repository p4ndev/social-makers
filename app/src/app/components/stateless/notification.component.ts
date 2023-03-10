import { Component, Inject, Input } from '@angular/core';
import { NOTIFICATION_CONFIG } from 'src/app/services/notification.config';

@Component({
  selector: 'app-notification-success',
  template: `
    <div [class]="helper.Wrap + ' text-green-800 bg-green-100'" [ngClass]="cssClass">
      <i [class]="helper.Icon + ' fa-check'"></i> {{ content }}
    </div>`
})
class NotificationSuccessComponent {
  @Input() content? : string;
  @Input() cssClass? : string;
  constructor(@Inject("NOTIFICATION_CONFIG") public helper : typeof NOTIFICATION_CONFIG) { }
}

@Component({
  selector: 'app-notification-error',
  template: `
    <div [class]="helper.Wrap + ' text-red-800 bg-red-100'" [ngClass]="cssClass">
      <i [class]="helper.Icon + ' fa-xmark'"></i> {{ content }}
    </div>`
})
class NotificationErrorComponent {
  @Input() content? : string;
  @Input() cssClass? : string;
  constructor(@Inject("NOTIFICATION_CONFIG") public helper : typeof NOTIFICATION_CONFIG) { }
}

@Component({
  selector: 'app-notification-warning',
  template: `
    <div [class]="helper.Wrap + ' text-yellow-800 bg-yellow-100'" [ngClass]="cssClass">
      <i [class]="helper.Icon + ' fa-triangle-exclamation'"></i> {{ content }}
    </div>`
})
class NotificationWarningComponent {
  @Input() content? : string;
  @Input() cssClass? : string;
  constructor(@Inject("NOTIFICATION_CONFIG") public helper : typeof NOTIFICATION_CONFIG) { }
}

export{ NotificationSuccessComponent, NotificationErrorComponent, NotificationWarningComponent }