import { Component } from '@angular/core';
import { Itens } from '../create/item.module';
import { ItensService } from '../itens.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-sala',
  templateUrl: './delete-sala.component.html',
  styleUrls: ['./delete-sala.component.scss']
})
export class DeleteSalaComponent {
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
     this.router.navigate(["/sala"])
   })
   }
     cancel(): void {
     this.router.navigate(['/sala'])
   }
}
