import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of SalesPerson objects
  salesPersonList: SalesPerson [] = [
      new SalesPerson("John", "Doe", "jdoe@gmail.com", 70000),
      new SalesPerson("Jill", "Valentine", "jval@gmail.com", 60000),
      new SalesPerson("Ostin", "Powers", "powers@gmail.com", 50000),
      new SalesPerson("Ivanna", "Platinova", "ivanna@gmail.com", 40000)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
