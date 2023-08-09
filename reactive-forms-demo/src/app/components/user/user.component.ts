import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  public userForm !:FormGroup;
  public skillSet ! :string [];
  ngOnInit(): void {
     this.userForm = new FormGroup(
       {
        firstName :new FormControl('Devendra',[Validators.required]),
        lastName :new FormControl(),
        email :new FormControl('',[Validators.email]),
        password :new FormControl(),
        skills :new FormGroup(
            {
              primary:new FormControl('Java8'),
              secondary :new FormControl(),
              other :new FormControl()
            }),
          maritalStatus :new FormControl()
       } );

       this.skillSet =['Java8' ,'Angular8','JavaScript' ,'TypeScript' ,'MySql','Oracle' ,'Spring Boot' ,'HTML'];
  }
constructor(){}
onSubmit(){
  console.log(this.userForm.value)
  console.log(this.userForm.valid)
  // reading value of individual field 
  console.log(this.userForm.controls['firstName'].value);
  console.log(this.userForm.controls['skills'].value);
  // reading  value of child object property
  console.log(this.userForm.controls['skills'].value.primary);
  console.log(this.userForm.controls['skills'].value.other);
}
}


