import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  template: `
    <button (click)="onButtonClick()"
        class="secondary-bg-color px-4 py-2 text-yellow-600"
        [ngClass]="{'opacity-50 cursor-default': disabled}">
          <i class="fa-solid" [ngClass]="icon"></i>
          <span class="hidden lg:inline">{{label}}</span>
    </button>
  `
})
export class IconButtonComponent {
  
  @Input()    icon        : string = "";
  @Input()    disabled    : boolean = false;
  @Input()    label       : string | number = "";
  @Output()   onClick = new EventEmitter();

  onButtonClick() : void{
    if(!this.disabled)
      this.onClick.emit();
  }

}