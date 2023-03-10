import { Component } from '@angular/core';
import { ENotificationStatus } from 'src/app/entities/notification.enum';
import { INotificationMessage } from 'src/app/entities/notification.interface';
import { MenuService } from "src/app/services/menu.service";
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.sass']
})
export class AdminMenuComponent {

  constructor(public helper : MenuService, private notification : NotificationService) { }

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
