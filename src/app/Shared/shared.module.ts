import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view/table-view.component';



@NgModule({
  declarations: [
    TableViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TableViewComponent,
  ],
})
export class SharedModule { }
