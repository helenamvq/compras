import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-banheiro',
  templateUrl: './banheiro.component.html',
  styleUrls: ['./banheiro.component.scss']
})
export class BanheiroComponent {
  constructor(private router: Router) {}
  ngOnInit(): void {

  }
    createItem() {
    this.router.navigate(['banheiro/create'])
  }
}
