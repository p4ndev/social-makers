import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ENDPOINTS } from 'src/app/settings/route.config';
import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MEDIA_PROVIDER } from 'src/app/settings/media-provider.config';
import { ISignature } from 'src/app/entities/signature.entity';
import { ProviderResponse } from 'src/app/entities/provider.entity';
import { IPicture } from 'src/app/entities/picture.entity';
import { rejectCallback, resolveCallback } from 'src/app/entities/promise.entity';

@Injectable({ providedIn: 'root' })
export class ProviderApiService implements OnDestroy {

    private sup = new Subscription();

    constructor(private http : HttpClient) { }
    
    private buildEndpoint = (slug : string) : string => {
        let endpoint = ENDPOINTS.MediaProvider + "/v1_1/";
        endpoint += MEDIA_PROVIDER.Account + "/" + slug + "/upload";
        return endpoint;
    }

    private uploadSuccessHandler(data : HttpResponse<ProviderResponse>, resolve : resolveCallback<IPicture>, reject : rejectCallback<string>) : void{
        if(data.ok && data.body)
            resolve({
                Id          : data.body.asset_id,
                Source      : data.body.secure_url,
                EagerSource : data.body.eager[0].secure_url
            });
        else{
            console.log(data);
            reject("Configuraton was malformed");
        }            
    }

    private uploadFailHandler(data : HttpErrorResponse, reject : rejectCallback<string>) : void{
        console.error(data.statusText);
        reject("Error when trying to upload asset");
    }

    uploadAsync = (media : File, preset : ISignature) : Promise<IPicture | string> => new Promise((res, rej) => {

        const body = new FormData();
        body.append("file",             media);
        body.append("public_id",        preset.Path);
        body.append("api_key",          MEDIA_PROVIDER.ApiKey);
        body.append("eager",            preset.Eager);
        body.append("signature",        preset.Signature);
        body.append("timestamp",        preset.Timestamp.toString());
        
        this.sup = this.http
            .post<ProviderResponse>(
                this.buildEndpoint("image"), body, {
                    observe: "response", headers: new HttpHeaders()
                }).subscribe({
                    next    : (data : HttpResponse<ProviderResponse>)   => this.uploadSuccessHandler(data, res, rej),
                    error   : (data : HttpErrorResponse)                => this.uploadFailHandler(data, rej)
                });

    });

    ngOnDestroy() : void { this.sup.unsubscribe(); }

}