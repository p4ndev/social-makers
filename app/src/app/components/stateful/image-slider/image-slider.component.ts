import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MEDIA_PROVIDER } from 'src/app/settings/media-provider.config';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.sass']
})
export class ImageSliderComponent implements OnInit {

  index   : number = 0;
  @Input()  source  : Array<string>;
  arrows  : Array<boolean> = [true, true];

  private indicators = {
    On: "bg-white",
    Off: "bg-gray-100 bg-opacity-50"
  };

  constructor(@Inject("MEDIA_PROVIDER") private helper : typeof MEDIA_PROVIDER){
    this.source = this.helper.Thumbnails;
  }

  ngOnInit() : void {    
    this.arrowEffects();
  }
  
  onLeftClicked() : void{
    this.index--;
    this.arrowEffects();
  }

  onRightClicked() : void{
    this.index++;
    this.arrowEffects();
  }

  arrowEffects() : void{    
    this.arrows[0] = (this.index === 0);
    this.arrows[1] = (this.index === (this.source.length - 1));
  }

  indicatorCssClass = (idx : number) : string => 
    (idx === this.index ? this.indicators.On : this.indicators.Off);

}
