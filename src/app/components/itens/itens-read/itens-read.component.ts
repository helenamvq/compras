import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Itens } from '../create/item.module';

import { ItensService } from '../itens.service';


@Component({
  selector: 'app-itens-read',
  templateUrl: './itens-read.component.html',
  styleUrls: ['./itens-read.component.scss']
})
export class ItensReadComponent implements OnInit{
  itens: Itens[] | any

  displayedColumns = ['id', 'name', 'price', 'situation', 'category', 'action']

  constructor(private itensService: ItensService, private http: HttpClient ) { }
  ngOnInit(): void {
    this.itensService.getItens().subscribe(itens => {
      this.itens = itens.filter(itens => itens.category === 'quarto')


    });
  }


}
