import { Component, OnInit } from '@angular/core';
import { ItensService } from '../itens.service';
import { Router } from '@angular/router';
import { Itens } from './item.module';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

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
  this.router.navigate(['/quarto'])

})
  }
  cancelItem(): void {

    this.router.navigate(['/quarto'])
  }



}


