import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';

import { EmployeeService } from '../employee.service'

import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: Employee[];

  constructor(private empService: EmployeeService,
    private router: Router) { }

  getEmployees(): void {
    this.empService.getEmployees().subscribe(employees => this.employees = employees);
  }

  deleteEmployee(id: number): void {
    this.empService.deleteEmployee(id).subscribe();
    this.getEmployees();
  }

  ngOnInit() {
    this.getEmployees();
  }

  goAdd(): void {
    this.router.navigateByUrl("/new");
  }
}
