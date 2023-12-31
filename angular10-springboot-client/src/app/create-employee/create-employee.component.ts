import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{

  employee : Employee = new Employee();
  submitted =false;
  constructor (private employeeService :EmployeeService ,private router :Router){}

  ngOnInit(): void {
  }
 newEmployee():void{
  this.submitted=false;
  this.employee=new Employee();
 }

 save() :void{
    this.employeeService.createEmployee(this.employee).subscribe(
      (data: any) => {
           console.log(data);
           this.employee=data;
           this.gotoList();
       },
      ( error: any) => console.log(error)
    );
 }
onSubmit():void{
  this.submitted=true;
  this.save();
}
gotoList(){
  this.router.navigate(['/employees']);
}

}
