import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ENotificationStatus } from 'src/app/enums/notification.enum';
import { INotificationMessage } from 'src/app/entities/notification.entity';
import { NotificationEventService } from 'src/app/services/events/notification.service';

@Component({
  selector: 'app-design-system',
  templateUrl: './design-system.component.html'
})
export class DesignSystemComponent implements OnInit {

  components = {
    ImageSlider : false,
    Notification : false,
    ImageMenu : false,
    Reaction : false
  };

  constructor(
    private route : ActivatedRoute,
    private notification : NotificationEventService
  ) { }
  
  ngOnInit() : void {
    this.route.queryParams.subscribe((data) => {
      switch(data["name"]){
        
        case "image-slider": 
          this.components.ImageSlider = true;
          break;

        case "notification": 
          this.components.Notification = true;
          break;

        case "image-menu": 
          this.components.ImageMenu = true;
          break;

        case "reaction": 
          this.components.Reaction = true;
          break;

      }
    });
  }

  onSuccessNotification() : void{
    
    let tmp : INotificationMessage = {
      Status: ENotificationStatus.Success,
      Content: "success_text_content"
    };

    this.notification.add(tmp);

  }

  onWarningNotification() : void{

    let tmp : INotificationMessage = {
      Status: ENotificationStatus.Warning,
      Content: "warning_text_content"
    };

    this.notification.add(tmp);

  }

  onErrorNotification() : void{

    let tmp : INotificationMessage = {
      Status: ENotificationStatus.Error,
      Content: "error_text_content"
    };

    this.notification.add(tmp);

  }

}
