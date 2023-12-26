import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { DetailComponent } from './service/detail/detail.component';
const routes: Routes = [
{ path:'', component:CountriesListComponent},
 { path:':country', component:DetailComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
