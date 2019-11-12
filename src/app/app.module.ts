import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ListComponent } from './list/list.component';
import { ExpressapiComponent } from './expressapi/expressapi.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ExpressapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule {

  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({ uri: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex' }),
      cache: new InMemoryCache()
    });
  }
}
