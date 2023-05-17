import { Component, Input, OnInit } from '@angular/core';
import { Book, BookSearch } from 'src/app/models/bookrespone';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  @Input() BookList: Book[];
  @Input() BookListSearch: BookSearch[];


  constructor() { }

  ngOnInit(): void {
  }

}
