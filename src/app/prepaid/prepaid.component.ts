import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-prepaid',
  templateUrl: './prepaid.component.html',
  styleUrls: ['./prepaid.component.css']
})
export class PrepaidComponent implements OnInit {
items:any;
error: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  this.get();
  }
get=()=> {
  this.api.getItems().subscribe(data=>{ this.items=data;},);
   (error: any) => this.error = error
   console.log(this.items)
 }
}
