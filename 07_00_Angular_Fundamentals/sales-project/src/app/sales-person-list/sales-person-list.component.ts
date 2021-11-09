import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of SalesPerson objects
  salesPersonList: SalesPerson [] = [
      new SalesPerson("John", "Doe", "jdoe@gmail.com", 70000),
      new SalesPerson("Jill", "Valentine", "jval@gmail.com", 60000),
      new SalesPerson("Ostin", "Powers", "powers@gmail.com", 50000),
      new SalesPerson("Ivanna", "Platinova", "ivanna@gmail.com", 40000),
      new SalesPerson("German", "Greff", "grefg@gmail.com", 30000),
      new SalesPerson("Anton", "Siluanov", "siluan@gmail.com", 45000),
      new SalesPerson("Anatoly", "Chubais", "anchubs@gmail.com", 10000),
      new SalesPerson("Oleg", "Tinkov", "thinkoff@gmail.com", 5000),
      new SalesPerson("Elon", "Musk", "muskmusk@gmail.com", 99999)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
