import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BookResponse } from '../models/bookrespone';

@Injectable({
  providedIn: 'root'
})
export class TrendingSubjectsService {
  baseUrl = "https://openlibrary.org/subjects/"
  constructor(private http: HttpClient) {

  }

  getAllBookes(subjectName) {
    let params = new HttpParams();
    params = params.append("limit", 10)
    let subjectname = subjectName.toLowerCase().split(' ').join('_');
    return this.http.get<BookResponse>(`${this.baseUrl}${subjectname}.json`, {
      observe: 'response',
      params,
    }).pipe(map((res)=>{
      return res.body
      
    }));
  }
}
