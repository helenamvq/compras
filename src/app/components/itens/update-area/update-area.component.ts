import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Itens } from '../create/item.module';
import { ItensService } from '../itens.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-update-area',
  templateUrl: './update-area.component.html',
  styleUrls: ['./update-area.component.scss']
})
export class UpdateAreaComponent {
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
    this.router.navigate(['/area'])
  })
}

cancel(): void {
this.router.navigate(['/area'])
}

}
