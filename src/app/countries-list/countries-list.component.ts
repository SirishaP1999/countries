import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs';
import { country } from '../service/model/country';
const REGION_OPTIONS=['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

 constructor( private readonly dataservice :DataService){ }
 countries$:any;
 searchFilter?:string;
 regionFilter?:string;
 regionOptions=REGION_OPTIONS;
  ngOnInit(): void {
    this.countries$=this.dataservice.getAllCountries();
  }
  get countries() {
    return this.countries$
      ? this.countries$
          .filter((country:any) =>
            this.searchFilter
              ? country.name
                  .toLowerCase()
                  .includes(this.searchFilter.toLowerCase())
              : country
          )
          .filter((country:any) =>
            {
              return this.regionFilter
                ? country.region.includes(this.regionFilter)
                : country
            }
          ):this.countries$;
  }
}
