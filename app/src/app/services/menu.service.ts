import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  Wrap  : string = "grid pl-5 grid-cols-3 lg:grid-cols-none";
  Menu  : string = "uppercase pt-4 lg:pt-6 mb-5 text-xl text-center lg:text-left";
  Icon  : string = "fa-solid lg:mr-6 lg:ml-8";
  Label : string = "hidden lg:inline";

  getIcon = (sulfix : string) : string => this.Icon + " " + sulfix;

}
