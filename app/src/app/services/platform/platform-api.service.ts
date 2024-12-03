import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IProject } from 'src/app/entities/project.entity';
import { ENDPOINTS } from 'src/app/settings/route.config';

@Injectable({ providedIn: 'root' })
export class PlatformApiService implements OnDestroy {

    private sup = new Subscription();

    constructor(private http : HttpClient) { }
    
    projects() : Observable<IProject[]> {
        return this.http.get<IProject[]>(ENDPOINTS.Platform + "/project");
    }

    projectAsync = async (model : IProject) : Promise<number> => new Promise<number>((res, rej) => {
        this.sup = this.http.post<number>(ENDPOINTS.Platform + "/project", model, { observe: "response" })
            .subscribe({
                next  : (data : HttpResponse<number>)   => {
                    if(data.ok && data.body)    res(data.body);
                    else                        rej("Error when trying to create a project");
                },
                error : (data : HttpErrorResponse)      => rej(data.statusText)
            });
    });

    ngOnDestroy() : void { this.sup.unsubscribe(); }

}
