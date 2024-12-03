import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ENDPOINTS } from '../../settings/route.config';

@Injectable({ providedIn: 'root' })
export class ReactionApiService implements OnDestroy {

  private sup : Array<Subscription> = [];

  constructor(private http : HttpClient) { }

  public likeCounterAsync = async (id : number) : Promise<number> => new Promise((res) => {
    this.sup.push(
      this.http
        .get<number>(ENDPOINTS.Feedback + "/like/" + id)
          .subscribe((votes : number) => res(votes))
    );
  });

  public addLikeAsync = async (id : number) : Promise<number> => new Promise((res) => {
    this.sup.push(
      this.http
        .post<number>(ENDPOINTS.Feedback + "/like", id)
          .subscribe((votes : number) => {
            this.sup.push(timer(500).subscribe(() => res(votes)));
          })
    );
  });

  ngOnDestroy() : void {
    this.sup.forEach(i => i.unsubscribe());
  }

}
