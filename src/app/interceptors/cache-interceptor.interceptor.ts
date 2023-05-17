import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpParams
} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { ApiCacheService } from '../services/api-cache.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptorInterceptor implements HttpInterceptor {

  constructor(private apicacheservice:ApiCacheService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method === 'GET') {
      const cacheKey = this.getCacheKey(request);

      const cachedResponse = this.apicacheservice.get(cacheKey);

  
      if (cachedResponse) {
        return of(new HttpResponse({ body: cachedResponse }));
      }

   
      return next.handle(request).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.apicacheservice.set(cacheKey, event.body);
          }
        })
      );
    }

    // For non-GET requests, pass the request through without caching
    return next.handle(request);
  }

  private getCacheKey(request: HttpRequest<any>): string {
    let url = request.url;
    let params = '';

    if (request.params instanceof HttpParams) {
      params = request.params.toString();
    }

    return `${url}?${params}`;
  }
    
  }


