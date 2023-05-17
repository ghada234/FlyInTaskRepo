import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BookSearch, BookSearchResult } from '../models/bookrespone';
import { SearchParams } from '../models/searchparams';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl = "https://openlibrary.org/";
  searchParams:SearchParams=new SearchParams();

  constructor(private http:HttpClient) { }

// getAllSubjects(){
//  return  this.http.get<any>(`${this.baseUrl}`)
// }
getsearchPrams(){
  return this.searchParams;
}
setSearchParams(params){
this.searchParams=params;

}
getBooksSearch()
{
  let params=new HttpParams();
  
  if(this.searchParams.searchTerm!==" "){
    params= params.append("q",this.searchParams.searchTerm.toLowerCase())
  }
    params=params.append("limit",this.searchParams.limit)
   params=params.append("page",this.searchParams.page)


  
return this.http.get<BookSearchResult>(`${this.baseUrl}search.json`, {
  observe: 'response',
  params,
}).pipe(map((res)=>{
  return res.body;
  
}));

}

}

//https://openlibrary.org/search.json?q=the+lord+of+the+rings
