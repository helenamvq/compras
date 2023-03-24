import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.scss']
})
export class SalaComponent {
  constructor(private router: Router) {}
  ngOnInit(): void {

  }
    createItem() {
    this.router.navigate(['sala/create'])
  }
}
