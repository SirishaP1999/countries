import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { country } from '../service/model/country';
@Component({
  selector: 'app-countrydata',
  templateUrl: './countrydata.component.html',
  styleUrls: ['./countrydata.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountrydataComponent {

  @Input() country!:country
}
