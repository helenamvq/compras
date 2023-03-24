import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItensService } from 'src/app/components/itens/itens.service';
import { Itens } from './../../../components/itens/create/item.module';

@Component({
  selector: 'app-cozinha-create',
  templateUrl: './cozinha-create.component.html',
  styleUrls: ['./cozinha-create.component.scss']
})
export class CozinhaCreateComponent implements OnInit{

  itens: Itens = {
    name: '',
    price: null,
    situation: '',
    category: ''
     }
  constructor(private itensService: ItensService, private router: Router)  {

  }
  ngOnInit(): void {
  }

  createItem(): void {
    this.itensService.create(this.itens).subscribe(() => {
      this.itensService.showMessage('Item inserido com sucesso!')
      this.router.navigate(['/cozinha'])

    })
  }
  cancelItem(): void {

    this.router.navigate(['/cozinha'])
  }
}
