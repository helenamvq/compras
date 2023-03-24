import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItensService } from 'src/app/components/itens/itens.service';
import { Itens } from 'src/app/components/itens/create/item.module';

@Component({
  selector: 'app-area-create',
  templateUrl: './area-create.component.html',
  styleUrls: ['./area-create.component.scss']
})
export class AreaCreateComponent implements OnInit {

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
      this.router.navigate(['/area'])

    })
  }
  cancelItem(): void {

    this.router.navigate(['/area'])
  }
}
