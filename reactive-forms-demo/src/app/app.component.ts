import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // title = 'reactive-forms-demo';
  public personForm!: FormGroup;
  public countries!: string[];
  ngOnInit(): void {
      this.personForm = new FormGroup(
        {
          firstName :new FormControl('Devendra' ,[Validators.required ,Validators.minLength(3),Validators.maxLength(8)]),
          lastName :new FormControl('Singraul'),
          email :new FormControl('singrauld@yahoo.com' ,[Validators.email ,Validators.required]),
          address :new FormGroup(
            {
              street: new FormControl(),
              city :new FormControl(),
              country :new FormControl()
            }),
            gender :new FormControl()
        });
        this.countries=['USA','India','Canada','France','Netherland','Newyark'];
  }

  public onSubmit(){
    
    console.log(this.personForm.value);
    console.log(this.personForm.valid);
    console.log("First name :"+this.personForm.controls['firstName'].value);
    console.log("Email "+this.personForm.controls['email'].value);
  
  }
}
