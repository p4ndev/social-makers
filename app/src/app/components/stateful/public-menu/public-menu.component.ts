import { MENU_CONFIG                      } from 'src/app/settings/menu.config';
import { PATHS                            } from 'src/app/settings/route.config';
import { NavigationEnd, Router            } from '@angular/router';
import { Component, Inject, OnInit        } from '@angular/core';
import { filter, tap                      } from 'rxjs';

@Component({
  selector: 'app-public-menu',
  templateUrl: './public-menu.component.html',
  styleUrls: ['./public-menu.component.sass']
})
export class PublicMenuComponent implements OnInit {

  vertical    : string = "";
  horizontal  : Array<string> = ["", "", ""];  
  private cssClasses : string = "mobile-active";

  constructor(
    @Inject("MENU_CONFIG") public helper : typeof MENU_CONFIG,
    @Inject("PATHS") public paths : typeof PATHS,
    public router : Router
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((f) : f is NavigationEnd => f instanceof NavigationEnd),
        tap(() => {
          this.vertical   = "";
          this.horizontal = ["", "", ""];
        }),
      ).subscribe((e) => {        
        switch(e.urlAfterRedirects){
          
          case ("/" + this.paths.ListProject):
            this.vertical = "p0";
            this.horizontal[0] = this.cssClasses;
            break;

          case ("/" + this.paths.NewProject):
            this.vertical = "p1";
            this.horizontal[1] = this.cssClasses;
            break;

          case ("/" + this.paths.SignOut):
            this.vertical = "p2";
            this.horizontal[2] = this.cssClasses;
            break;

        }
      });
  }

}
