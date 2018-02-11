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

  ngOnInit() {
    this.getEmployees();
  }

}
