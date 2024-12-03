import { HttpClient, HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ENDPOINTS } from '../../settings/route.config';
import { IShortlist } from '../../entities/shortlist.entity';
import { rejectCallback, resolveCallback } from 'src/app/entities/promise.entity';

@Injectable({ providedIn: 'root' })
export class ShortlistApiService implements OnDestroy {

  private sup : Array<Subscription> = [];

  constructor(private http : HttpClient) { }

  private successOrFailHandler(statusCode  : HttpResponseBase, resolve : resolveCallback<string>, reject : rejectCallback<string>) : void{
    switch(statusCode.status){      
      case 201:
      case 200: resolve("");                            break;
      case 404: reject("You hadn't subscribed yet");    break;
      case 409: reject("You had already subscribed");   break;
      default : reject("Internal server error");        break;
    }
  }

  public optInAsync = async (model : IShortlist) : Promise<string> => new Promise((res, rej) => {
    let fullUri : string = ENDPOINTS.Feedback + "/subscribe";
    this.sup.push(
      this.http.post(fullUri, model, { observe: "response" })
        .subscribe({
          next  : (hrb : HttpResponseBase)   => this.successOrFailHandler(hrb, res, rej),
          error : (heb : HttpErrorResponse)  => this.successOrFailHandler(heb, res, rej)
        })
    );
  });

  public optOutAsync = async (model : IShortlist) : Promise<string> => new Promise((res, rej) => {
    let fullUri : string = ENDPOINTS.Feedback + "/subscribe";    
    this.sup.push(
      this.http.delete(fullUri, { observe: "response", body: model })
        .subscribe({
          next  : (hrb : HttpResponseBase)   => this.successOrFailHandler(hrb, res, rej),
          error : (heb : HttpErrorResponse)  => this.successOrFailHandler(heb, res, rej)
        })
    );
  });

  ngOnDestroy() : void {
    this.sup.forEach(i => i.unsubscribe());
  }

}