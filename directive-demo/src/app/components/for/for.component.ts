import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent {
  courses :string[];
  students :IStudent[];
  movies :IMovie[];
  constructor(){
    this.courses=[
      'Angular' ,'TypeScript','Java' ,'React','Node'
    ];
    this.students=[
      {
        fname:"Devendra",
        lname:"Singraul",
        score :70
      },
      {
        fname:"Rajesh",
        lname:"Singraul",
        score :80
      },
      {
        fname:"Manoj",
        lname:"Singh",
        score :83
      },
    ];
    this.movies=[
      {
        title:"Bahubali",
        genre :"Action and Drama",
        director:"S.S. Rajamauli"
      },
      {
        title:"RRR",
        genre :"Action and Drama",
        director:"S.S. Rajamauli"
      },
      {
        title:"Sigham",
        genre :"Action and Drama",
        director:"Rohit Shetty"
      },
    ];
  }
}
interface IStudent{
  fname:string;
  lname:string;
  score :number
}

interface IMovie{
 title :string;
 genre :string;
 director:string;
}