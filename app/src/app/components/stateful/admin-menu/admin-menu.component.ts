import { Component } from '@angular/core';
import { MenuService } from "src/app/services/menu.service";

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.sass']
})
export class AdminMenuComponent {

  constructor(public helper : MenuService) { }

}
