import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planilha-compra',
  templateUrl: './planilha-compra.component.html',
  styleUrls: ['./planilha-compra.component.scss'],
})
export class PlanilhaCompraComponent implements OnInit {

  listItem = new Array

  constructor() {
    this.listItem = this.list();
  }

  ngOnInit() { }

  unread(item) {
    console.log(item)
    console.log(this.listItem.indexOf(item))
    this.listItem.splice(this.listItem.indexOf(item), 1)
    console.log(this.listItem)
  }


  list() {
    return [
      {id: 1, quantidade: 403, peso: 450},
      {id: 2, quantidade: 403, peso: 450},
      {id: 3, quantidade: 424, peso: 450},
      {id: 4, quantidade: 403, peso: 450},
      {id: 5, quantidade: 403, peso: 450},
      {id: 6, quantidade: 403, peso: 450},
      {id: 7, quantidade: 403, peso: 450},
      {id: 8, quantidade: 403, peso: 450},
      {id: 9, quantidade: 403, peso: 450},
      {id: 10, quantidade: 403, peso: 450},
      {id: 11, quantidade: 403, peso: 450},
      {id: 12, quantidade: 403, peso: 450},
      {id: 13, quantidade: 403, peso: 450},
      {id: 14, quantidade: 403, peso: 450},
      {id: 15, quantidade: 403, peso: 450},
      {id: 16, quantidade: 403, peso: 450},
      {id: 17, quantidade: 403, peso: 450},
      {id: 18, quantidade: 403, peso: 450},
      {id: 19, quantidade: 403, peso: 450},
    ]
  }
}
