import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {List, FullList} from '../shared/expressapi.model';

@Component({
  selector: 'app-expressapi',
  templateUrl: './expressapi.component.html',
  styleUrls: ['./expressapi.component.css']
})
export class ExpressapiComponent implements OnInit {
public list = [];
  constructor(private http: HttpClient,
  ) {
     this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(res => {
      this.list.push(res);
     });
   }

  ngOnInit() {
  }

}
