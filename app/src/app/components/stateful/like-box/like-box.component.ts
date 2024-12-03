import { ReactionApiService } from 'src/app/services/feedback/reaction-api.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-like-box',
  templateUrl: './like-box.component.html'
})
export class LikeBoxComponent implements OnInit, OnDestroy {

  isRunning         : boolean = false;
  like$ = new BehaviorSubject(12314);
  @Input() icon     : string = "";
  @Input() id!      : number;

  constructor(private reactionApi : ReactionApiService){}
  
  ngOnInit() : void{
    this.reactionApi.likeCounterAsync(this.id)
      .then((counter : number) => this.like$.next(counter));
  }
  
  ngOnDestroy() : void {
    this.reactionApi.ngOnDestroy();
  }

  onLike() : void {
    if(this.isRunning) return;
    this.isRunning = true;
    this.reactionApi.addLikeAsync(this.id)
      .then((counter) => this.like$.next(counter))
        .finally(() => this.isRunning = !this.isRunning);
  }

}
