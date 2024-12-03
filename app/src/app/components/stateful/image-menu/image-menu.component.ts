import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MEDIA_PROVIDER } from 'src/app/settings/media-provider.config';
import { IPicture } from 'src/app/entities/picture.entity';

@Component({
  selector: 'app-image-menu',
  templateUrl: './image-menu.component.html',
  styleUrls: ['./image-menu.component.sass']
})
export class ImageMenuComponent{
  
  @Input() content : Array<IPicture> = [];
  @Output() contentChange = new EventEmitter<Array<IPicture>>(); 

  isBackEligible    = (index : number) : boolean  => (index < 1);
  isForwardEligible = (index : number) : boolean  => (index >= (this.content.length - 1));
  broadcast         = () : void                   => this.contentChange.emit(this.content);
  source            = (model : IPicture) : string => (model.EagerSource ? model.EagerSource : model.Source);

  constructor(@Inject("MEDIA_PROVIDER") private helper : typeof MEDIA_PROVIDER){
    this.content = helper.Images;
  }

  ordering() : void{
    let i = 0;
    this.content.forEach(item => {
      item.Order = i;
      i++;
    });
  }

  back(index : number) : void{    
    const tmp = this.content[index];
    this.content[index] = this.content[index - 1];
    this.content[index - 1] = tmp;
    this.ordering();
    this.broadcast();
  }

  forward(index : number) : void{
    const tmp = this.content[index];
    this.content[index] = this.content[index + 1];
    this.content[index + 1] = tmp;
    this.ordering();
    this.broadcast();
  }

  remove(index : number) : void{
    this.content.splice(index, 1);
    this.broadcast();
  }

}
