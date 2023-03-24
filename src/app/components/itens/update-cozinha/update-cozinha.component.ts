import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Itens } from '../create/item.module';
import { ItensService } from '../itens.service';

@Component({
  selector: 'app-update-cozinha',
  templateUrl: './update-cozinha.component.html',
  styleUrls: ['./update-cozinha.component.scss']
})
export class UpdateCozinhaComponent {
  itens: Itens = {
    name: '',
    price: null,
    situation: '',
    category: ''
     }
     constructor(private itensService: ItensService, private router: Router, private route: ActivatedRoute, private http: HttpClientModule ) {}
     ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.itensService.readById(id!).subscribe(itens => {
this.itens = itens
    })
    }
update(): void {
  this.itensService.update(this.itens).subscribe(() => {
    this.itensService.showMessage('Produto atualizado com sucesso!')
    this.router.navigate(['/cozinha'])
  })
}
cancel(): void {
this.router.navigate(['/cozinha'])
}

}
