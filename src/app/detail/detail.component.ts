import { Input, Component, OnInit } from '@angular/core';

import { Employee } from '../employee';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() name: string;
  @Input() surname: string;
  @Input() age: number;
  @Input() exp: number;
  @Input() addr: string;
  @Input() id: number;

  constructor() { }

  ngOnInit() {
    if (!this.name) this.name = "";
    if (!this.surname) this.surname = "";
    if (!this.addr) this.addr = "";
  }

  getData (): Employee {
    var emp = new Employee (this.id, this.name, this.surname,
      this.exp, this.age, this.addr);
    return emp;
  }


}
