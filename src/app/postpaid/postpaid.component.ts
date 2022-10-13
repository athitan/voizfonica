import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-postpaid',
  templateUrl: './postpaid.component.html',
  styleUrls: ['./postpaid.component.css']
})
export class PostpaidComponent implements OnInit {
items:any;
error: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  this.get();
  }
get=()=> {
  this.api.getItems1().subscribe(data=>{ this.items=data;},);
   (error: any) => this.error = error
   console.log(this.items)
 }
}

