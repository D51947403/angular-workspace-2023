import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]> | undefined;

  constructor (private employeeService :EmployeeService ,private router :Router){}
  ngOnInit(): void {
    this.reloadData();
  }


  reloadData(){
    this.employees=this.employeeService.getEmployeeList();
  }

  deleteEmployee(id :number){
    this.employeeService.deleteEmployee(id)
        .subscribe(
        (data :any) =>{
           console.log(data);
          this.reloadData();
        },
        (error :any) =>
          console.log(error)
        );
  }

  employeeDetails(id :number){
    //console.log("employeeDetails "+id);
   this.router.navigate(['details' ,id]);
  }
  
  employeeUpdate(id :number){
   // console.log("employeeDetails "+id);
   this.router.navigate(['update' ,id]);
  }
}
