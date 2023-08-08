import { Component, OnInit } from '@angular/core';
import { UpperCaseConverterService } from 'src/app/services/upper-case-converter.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-upper-case-converter',
  templateUrl: './upper-case-converter.component.html',
  styleUrls: ['./upper-case-converter.component.css']
})
export class UpperCaseConverterComponent implements OnInit {
 
  public result :any;
  public my_message:any;
  constructor(private _service :UpperCaseConverterService){

  }
 
  ngOnInit(): void {
   
  }

  public upperCaseConverter(obj :string) :any{
   this._service.convertToUpperCase(obj).subscribe(
     (response:any)=>{
      this.result=response;
     },
     (error:HttpErrorResponse)=> {
      console.error(error);
     }
   );
  }

}
