import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Book, BookSearch } from '../models/bookrespone';
import { SearchParams } from '../models/searchparams';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingSubjects: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry Potter' },
    { name: 'Crypto' },
  ];
  @ViewChild("searchElement", { static: false })
  searchTerm!: ElementRef; 
  searchterm:string;
  searchparams:SearchParams;
  books:BookSearch[];
  totalItems:number;
  currentPage:number

  

  constructor(private apiservice:ApiServiceService) { }

  ngOnInit(): void {

   this.searchparams=this.apiservice.getsearchPrams();

  }

  getBooks(){
    this.apiservice.getBooksSearch().subscribe(res=>{
      if(res){
      
        console.log(res);
        this.books=res.docs;

      }
    },error=>{
      console.log(error)
    })
  }

  onSearch(searchterm){
  

  const params=this.apiservice.getsearchPrams();

  params.page=1;
  params.searchTerm=searchterm;
  console.log(searchterm)

  this.apiservice.setSearchParams(params);

  this.getBooks();
  }
pageChanged(event){


const params=this.apiservice.getsearchPrams();
params.page=event.page;
this.apiservice.setSearchParams(params);
this.getBooks();


}
onReset(){
  this.searchterm="";
  this.searchparams=new SearchParams();
  this.apiservice.setSearchParams(this.searchparams)
  this.getBooks()

}
}
