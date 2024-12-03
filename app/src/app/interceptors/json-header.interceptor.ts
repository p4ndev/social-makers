import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable                                           } from '@angular/core';
import { Observable                                           } from 'rxjs';

@Injectable()
export class JsonHeaderInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if(request.url.indexOf("localhost") !== -1)
      request = request.clone({
        setHeaders: {
          "Content-Type" : "application/json"
        }
      });

    return next.handle(request);

  }

}
