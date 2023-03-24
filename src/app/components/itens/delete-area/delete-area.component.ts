import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Itens } from '../create/item.module';
import { ItensService } from '../itens.service';

@Component({
  selector: 'app-delete-area',
  templateUrl: './delete-area.component.html',
  styleUrls: ['./delete-area.component.scss']
})
export class DeleteAreaComponent {
  itens: Itens = {
    name: '',
    price: null,
    situation: '',
    category: ''
     }
     constructor(private itensService: ItensService, private router: Router, private route: ActivatedRoute) { }
     ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id');
       this.itensService.readById(id!).subscribe(itens => {
   this.itens = itens
       })
     }

   deleteItem(): void {
   this.itensService.delete(this.itens.id!).subscribe(() => {
     this.itensService.showMessage('Item excluído com sucesso!')
     this.router.navigate(["/area"])
   })
   }
     cancel(): void {
     this.router.navigate(['/area'])
   }

}
