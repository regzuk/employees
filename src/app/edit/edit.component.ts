import { Component, OnInit, ViewChild } from '@angular/core';

import { DetailComponent } from '../detail/detail.component'

import { Employee } from '../employee';

import { EmployeeService } from '../employee.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @ViewChild(DetailComponent)
  private detail: DetailComponent;

  emp: Employee;
  
  constructor(private empService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getEmp();
  }

  getEmp(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.empService.getEmployee(id).subscribe(emp => this.emp = emp);
  }

  save(): void {
    let emp = this.detail.getData();
    this.empService.updateEmployee(emp).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.router.navigateByUrl("/list");
  }

}
