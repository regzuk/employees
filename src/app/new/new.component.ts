import { Component, OnInit, ViewChild } from '@angular/core';

import { DetailComponent } from '../detail/detail.component'

import { Employee } from '../employee';

import { EmployeeService } from '../employee.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  @ViewChild(DetailComponent)
  private detail: DetailComponent;

  constructor(private empService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
  }
  
  add(): void {
    let emp = this.detail.getData();
    this.empService.addEmployee(emp).subscribe(() => this.goBack());
    
  }

  goBack(): void {
    this.router.navigateByUrl("/list");
  }

}
