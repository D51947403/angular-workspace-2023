import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  id!: number;
  employee!: Employee ;
  submitted =false;
  constructor(private route :ActivatedRoute ,private router :Router, private employeeService : EmployeeService){}
  

  ngOnInit(): void {
    this.employee = new Employee();
    this.id= this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id).subscribe(
        (data :any ) => {
          console.log(data);
          this.employee=data;
        },
        (error:any) => console.log(error)
    );
  }
  updateEmployee(){

    this.employeeService.updateEmployee(this.id , this.employee).subscribe(
        (data :any) => {
          console.log(data);
          this.employee=new Employee();
           this.gotoList();
        },
       (error:any) => console.error(error)
    );
  }

  onSubmit(){
    this.updateEmployee();
    this.submitted=true;
  }

  gotoList(){
    this.router.navigate(['/employees']);
  }
  
  list(){
    this.router.navigate(['employees']);
  }
}