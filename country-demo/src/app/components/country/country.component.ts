import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/countries/country.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit{
public  countryData:any;
  constructor(private countryService :CountryService){

  }
  ngOnInit(): void {
     this.countryService.getCountries().subscribe(
      (response :any) => {
        this.countryData=response;
      },
      (error :any) => {
      console.error(error);
      }
     );
  }

}
