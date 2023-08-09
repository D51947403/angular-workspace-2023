import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  public email ! :string;
  public password !:string;

  public onLogin(useLoginData:any){
     console.log(useLoginData);
     console.log(this.email);
  }
}
