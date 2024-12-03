import { HttpClient, HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { ENDPOINTS } from 'src/app/settings/route.config';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ISignature } from 'src/app/entities/signature.entity';
import { IPicture } from 'src/app/entities/picture.entity';

@Injectable({ providedIn: 'root' })
export class ImageApiService implements OnDestroy {

    private sup : Array<Subscription> = [];

    constructor(private http : HttpClient) { }

    thumbnail(projectId : number) : Observable<string>{
        return this.http.get(ENDPOINTS.Media + "/image/" + projectId + "/thumbnail", { responseType: "text" });
    }

    signatureAsync() : Promise<ISignature>{
        return new Promise((res, rej) => {
            this.sup.push(
                this.http.get<ISignature>(ENDPOINTS.Media + "/image/signature")
                    .subscribe({
                        next    : (data : ISignature) => res(data),
                        error   : () => rej()
                    })
            );
        });
    }

    addAsync = async (images : Array<IPicture>) : Promise<void> => new Promise((res, rej) => {
        this.sup.push(
            this.http.post(ENDPOINTS.Media + "/image", images, { observe: "response"})
                .subscribe({
                    next: (data : HttpResponseBase) => {
                        if(data.ok)     res();
                        else            rej();
                    },
                    error: (data : HttpErrorResponse) => rej(data.statusText)
                })
        );
    });

    imagesAsync = (projectId : number) : Promise<IPicture[] | null> => new Promise((res, rej) => {
        this.sup.push(
            this.http.get<IPicture[]>(
                ENDPOINTS.Media + "/image/" + projectId,
                { observe: "response" }
            ).subscribe({
                error   : (data : HttpErrorResponse)        => rej(data.statusText),
                next    : (data : HttpResponse<IPicture[]>) => {
                    if(data.ok) res(data.body as IPicture[]);
                    return      rej("Data isn't available");
                }
            })
        );
    });

    ngOnDestroy() : void { 
        this.sup.forEach(i => i.unsubscribe());        
    }

}