// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-detail',
//   templateUrl: './detail.component.html',
//   styleUrls: ['./detail.component.css']
// })
// export class DetailComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Observable, forkJoin, of } from 'rxjs';
import { country, Currency, Language } from 'src/app/service/model/country';
import { tap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  country$: Observable<country>;
  borderCountries$: Observable<country[]>;

  constructor(private api: DataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.country$ = this.api.getCountryByName(params['country']).pipe(
        tap((res) => console.log(res)),
        mergeMap((res) => {
          if (res.borders) {
            this.borderCountries$ = this.api.getCountriesByCodes(res.borders);
          }
         
      return of(res);
        })
      );
    });
  }
  displayCurrencies(currencies: Currency[]) {
    return currencies.map((currency) => currency.name).join(', ');
  }

  displayLanguages(languages: Language[]) {
    return languages.map((language) => language.name).join(', ');
  }
}


