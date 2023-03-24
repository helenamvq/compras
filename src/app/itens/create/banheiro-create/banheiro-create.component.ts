import { Component, OnInit } from '@angular/core';
import { Itens } from 'src/app/components/itens/create/item.module';
import { Router } from '@angular/router';
import { ItensService } from 'src/app/components/itens/itens.service';



@Component({
  selector: 'app-banheiro-create',
  templateUrl: './banheiro-create.component.html',
  styleUrls: ['./banheiro-create.component.scss']
})
export class BanheiroCreateComponent implements OnInit {
  itens: Itens = {
    name: '',
    price: null,
    situation: '',
    category: ''

     }



  constructor(private itensService: ItensService, private router: Router)  {

  }
  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty

  }

  createItem(): void {
    this.itensService.create(this.itens).subscribe(() => {
      this.itensService.showMessage('Item inserido com sucesso!')
      this.router.navigate(['/banheiro'])

    })
      }
  cancelItem(): void {

    this.router.navigate(['/banheiro'])
  }
}
