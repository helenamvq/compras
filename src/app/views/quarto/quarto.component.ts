import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quarto',
  templateUrl: './quarto.component.html',
  styleUrls: ['./quarto.component.scss']
})
export class QuartoComponent {
  constructor(private router: Router) {}
  ngOnInit(): void {

  }
    createItem() {
    this.router.navigate(['/quarto/create'])
  }
}
