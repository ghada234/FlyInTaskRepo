import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/bookrespone';
import { TrendingSubjectsService } from '../services/trending-subjects.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trending-subjects',
  templateUrl: './trending-subjects.component.html',
  styleUrls: ['./trending-subjects.component.css']
})
export class TrendingSubjectsComponent implements OnInit {
  Books: Book[];
  bookName:string;


  constructor(private route:ActivatedRoute,private trendsubjectservice:TrendingSubjectsService) { }

  ngOnInit(): void {
    this.getAllBooks();
    this.bookName=this.route.snapshot.paramMap.get("name");    
  }
  getAllBooks(){
    this.trendsubjectservice.getAllBookes(this.route.snapshot.paramMap.get("name")).subscribe(res=>{
      if(res){
        console.log(res);
        this.Books=res.works;
      }
    },error=>{
      console.log(error)
    })
  }

}
