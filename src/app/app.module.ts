import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { DropdownComponent } from './dropdown/dropdown.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountrydataComponent } from './countrydata/countrydata.component';
import { DetailComponent } from './service/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountriesListComponent,
    CountrydataComponent,
    DropdownComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
