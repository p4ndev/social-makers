import { Component } from '@angular/core';
import { MenuService } from "src/app/services/menu.service";

@Component({
  selector: 'app-public-menu',
  templateUrl: './public-menu.component.html',
  styleUrls: ['./public-menu.component.sass']
})
export class PublicMenuComponent {

  vertical    : string = "";
  horizontal  : Array<string> = ["", "", ""];
  _cssClasses : string = "mobile-active";

  constructor(public helper : MenuService) { }

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
