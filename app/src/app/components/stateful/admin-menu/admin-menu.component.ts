import { Component, Inject                } from '@angular/core';
import { MENU_CONFIG                      } from 'src/app/services/menu.config';
import { ENotificationStatus              } from 'src/app/entities/notification.enum';
import { NotificationService              } from 'src/app/services/notification.service';
import { INotificationMessage             } from 'src/app/entities/notification.interface';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.sass']
})
export class AdminMenuComponent {

  constructor(
    @Inject("MENU_CONFIG") public helper : typeof MENU_CONFIG,
    private notification : NotificationService
  ) { }

  test0() : void{
    
    let tmp : INotificationMessage = {
      Status: ENotificationStatus.Success,
      Content: "Successfully created"
    };

    this.notification.add(tmp);

  }

  test1() : void{
    
    let tmp : INotificationMessage = {
      Status: ENotificationStatus.Error,
      Content: "Error created"
    };

    this.notification.add(tmp);

  }

  test2() : void{
    
    let tmp : INotificationMessage = {
      Status: ENotificationStatus.Warning,
      Content: "Warning created"
    };

    this.notification.add(tmp);

  }

}
