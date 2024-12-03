import { Component, Inject, OnInit                } from '@angular/core';
import { NavigationEnd, Router                    } from '@angular/router';
import { Subscription, timer                      } from 'rxjs';

import { MENU_CONFIG                              } from 'src/app/settings/menu.config';
import { PATHS                                    } from 'src/app/settings/route.config';
import { SaveEventService                         } from 'src/app/services/events/save.service';
import { UploadEventService                       } from 'src/app/services/events/upload.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.sass']
})
export class AdminMenuComponent implements OnInit {

  shouldRender  : boolean = false;
  shouldAnimate : boolean = false;
  sup : Array<Subscription> = [];

  constructor(
    @Inject("PATHS") public paths         : typeof PATHS,
    public saveEvent                      : SaveEventService,
    public uploadEvent                    : UploadEventService,
    @Inject("MENU_CONFIG") public helper  : typeof MENU_CONFIG,
    private router : Router
  ) { }

  ngOnInit() : void{
    this.sup.push(
      this.router.events.subscribe(events => {
        if(events instanceof NavigationEnd)
          this.shouldRender = (("/" + this.paths.NewProject) === events.url);
          this.sup.push(timer(500).subscribe(() => this.shouldAnimate = this.shouldRender));
      })
    );
  }

  onUpload() : void{
    if(!this.uploadEvent.State)
      this.uploadEvent.Toggle();
  }

  onSave() : void {
    if(!this.saveEvent.State)
      this.saveEvent.Toggle();
  }

  ngOnDestroy() : void{
    this.sup.forEach(s => s.unsubscribe());
  }

}
