import { Component, } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-cozinha',
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.scss']
})
export class CozinhaComponent {
  constructor(private router: Router) {}
  ngOnInit(): void {

  }
    createItem() {
    this.router.navigate(['cozinha/create'])
  }
}
