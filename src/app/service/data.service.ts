import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import {country} from './model/country';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private readonly http:HttpClient){ }

  getAllCountries(): Observable<country[]>{
    const url=`${environment.baseurl}/all`;
    return this.http.get<country[]>(url);
  }
  getCountryByName(name: string){
    return this.http.get<country[]>(`${environment.baseurl}/name/${name}`)
    .pipe(map(([res])=>res));
  }
  getCountriesByCodes(codes: string[]) {
  
    return this.http.get<country[]>(
      `${environment.baseurl}/alpha?codes=${codes.join(';')}`
    );
  }
  
}

