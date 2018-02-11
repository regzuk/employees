import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';

import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: Employee[];

  constructor(private empService: EmployeeService) { }

  getEmployees(): void {
    this.empService.getEmployees().subscribe(employees => this.employees = employees);
  }

  deleteEmployee(id: number): void {
    // debugger;
    // this.employees = this.employees.filter(e => e.id !== id);
    this.empService.deleteEmployee(id).subscribe();
    this.getEmployees();
    var a = 1;
  }

  ngOnInit() {
    this.getEmployees();
  }

}
