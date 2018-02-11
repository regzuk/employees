import { Input, Component, OnInit } from '@angular/core';

import { Employee } from '../employee';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  name: string;
  surname: string;
  age: number;
  exp: number;
  addr: string;
  @Input() id: number;

  constructor() { }

  ngOnInit() {
  }

  getData (): Employee {
    var emp = new Employee (this.id, this.name, this.surname,
      this.exp, this.age, this.addr);
    return emp;
  }


}
