import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'template-driven-forms-demo';
public firstName :string ='Devendra';
public lastName !:string;
public email !:string;
public street !:string;
public city !:string;
public country !:string;
public gender !:string;

   
 public onSubmit(personData:any){
     console.log(personData);
     console.log(this.lastName);
 }

}
