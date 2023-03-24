import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Itens } from '../itens/create/item.module';
import { ItensService } from '../itens/itens.service';

@Component({
  selector: 'app-itens-read-banheiro',
  templateUrl: './itens-read-banheiro.component.html',
  styleUrls: ['./itens-read-banheiro.component.scss']
})
export class ItensReadBanheiroComponent {
  itens: Itens[] | any

  displayedColumns = ['id', 'name', 'price', 'situation', 'category', 'action']

  constructor(private itensService: ItensService, private http: HttpClient ) { }
  ngOnInit(): void {
    this.itensService.getItens().subscribe(itens => {
      this.itens = itens.filter(itens => itens.category === 'banheiro')

    });
  }


}

