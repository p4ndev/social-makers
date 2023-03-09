import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuService } from 'src/app/services/Menu.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.sass']
})
export class AdminMenuComponent implements OnInit {

  constructor(public helper : MenuService) { }

  ngOnInit() { }

}
