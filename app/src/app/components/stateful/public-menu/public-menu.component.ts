import { Component, Inject        } from '@angular/core';
import { MENU_CONFIG              } from 'src/app/services/menu.config';

@Component({
  selector: 'app-public-menu',
  templateUrl: './public-menu.component.html',
  styleUrls: ['./public-menu.component.sass']
})
export class PublicMenuComponent {

  vertical    : string = "";
  _cssClasses : string = "mobile-active";
  horizontal  : Array<string> = ["", "", ""];

  constructor(
    @Inject("MENU_CONFIG") public helper : typeof MENU_CONFIG
  ) { }

  navToAllProjects() : void{ 
    this.vertical = "p0";
    this.horizontal = [this._cssClasses, "", ""];
  }

  navToNewProject() : void{
    this.vertical = "p1";
    this.horizontal = ["", this._cssClasses, ""];
  }
  
  navToSignOut() : void{
    this.vertical = "p2";
    this.horizontal = ["", "", this._cssClasses];
  }

}
