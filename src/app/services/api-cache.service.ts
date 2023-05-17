import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCacheService {
  private cache: { [url: string]:any} = {};
  constructor() { }

  get(url: string): any {
    return this.cache[url];
  }

  set(url: string, data: any): void {
    this.cache[url] = data;
  }
  clear(): void {
    this.cache = {};
  }
}
