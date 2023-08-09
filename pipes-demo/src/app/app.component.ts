import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-demo-project';
  myDate :Date = new Date();
  customDate :Date = new Date();
  myMoney :number =1200;
  myObj ={
    name:"Devendra",
    salary :12000,
    age : 28
  };
  myNumber :number =23123.89673;
  
  stock:number=3.5;
  numberArr :number[] =[10, 20,30,40,50,60];
  myLetter :string[]=['a','b','c','d','e'];
  promiseData :any;
  myPromiseData:Promise<any>;
  helloPromiseData:Promise<any>;
constructor(){
  this.getPromise().then(v=> this.promiseData=v);
  this.myPromiseData=this.getPromise();
  this.helloPromiseData=this.getHelloPromise();
}


getPromise(){
  return new Promise((resolve ,reject) =>
  {
    // time is in millisecond 
    setTimeout( () => resolve("Custom Promise Response") , 2000);
  });
}

getHelloPromise(){
  return new Promise ((resolve ,reject)=>{
     setTimeout(()=>resolve("Hello Promise"), 3000);
  });
}

}
