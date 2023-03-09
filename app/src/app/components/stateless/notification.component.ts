import { Component, Input } from '@angular/core';

@Component({ template: `` })
class NotificationBaseComponent{
  @Input() content : string = "";
}

@Component({
  selector: 'app-notification-success',
  template: `<div class="notification-inner w-96 py-4 mb-4 rounded-lg shadow-sm text-green-800 bg-green-100"><i class="fa-solid fa-check mx-5"></i> {{ content }}</div>`
})
class NotificationSuccessComponent extends NotificationBaseComponent { }

@Component({
  selector: 'app-notification-error',
  template: `<div class="notification-inner w-96 py-4 mb-4 rounded-lg shadow-sm text-red-800 bg-red-100"><i class="fa-solid fa-xmark mx-5"></i> {{ content }}</div>`
})
class NotificationErrorComponent extends NotificationBaseComponent { }

@Component({
  selector: 'app-notification-warning',
  template: `<div class="notification-inner w-96 py-4 mb-4 rounded-lg shadow-sm text-yellow-800 bg-yellow-100"><i class="fa-solid fa-triangle-exclamation mx-5"></i> {{ content }}</div>`
})
class NotificationWarningComponent extends NotificationBaseComponent { }

export{ NotificationSuccessComponent, NotificationErrorComponent, NotificationWarningComponent }