import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing.module';

import { ButtonContainerComponent } from '../components/button-container/button-container.component';
import { ListContainerComponent } from '../components/list-container/list-container.component';
import { PaginationComponent } from '../components/pagination/pagination.component';
import { DataService } from '../services/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonContainerComponent,
    ListContainerComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
