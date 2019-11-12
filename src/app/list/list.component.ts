import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Query, AllUsers } from '../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: Observable<AllUsers[]>;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.users = this.apollo.watchQuery<Query>({
      query: gql`
      query  {
        allUsers {
          id
          name
          email
        }
  }
  `
    })
      .valueChanges
      .pipe(
        map(result => result.data.allUsers)
      );
  }

}
