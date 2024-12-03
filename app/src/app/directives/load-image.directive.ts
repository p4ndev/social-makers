import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { PROJECT_CONFIG } from '../settings/project.config';
import { ImageApiService } from '../services/media/image-api.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appLoadImage]'
})
export class LoadImageDirective implements AfterViewInit, OnInit, OnDestroy {
  
  @Input() appLoadImage? : number;
  private image? : HTMLImageElement;
  private sup? : Subscription;

  constructor(private wrapper : ElementRef, private imageApi : ImageApiService){ }

  loadImage(url : string) : void{
    if(!this.image) return;
    this.wrapper.nativeElement.setAttribute("class", PROJECT_CONFIG.List.Left);
    this.image.setAttribute("class", PROJECT_CONFIG.List.Img);
    this.image.src = url;
  }

  ngAfterViewInit() : void {
    if(!this.appLoadImage) return;
    this.image = this.wrapper.nativeElement.querySelector("img");
  }

  ngOnInit() : void {
    this.sup = this.imageApi
      .thumbnail(this.appLoadImage!)
        .subscribe((url : string) => this.loadImage(url));
  }

  ngOnDestroy() : void {
    this.sup?.unsubscribe();
  }

}