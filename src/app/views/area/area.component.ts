import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent {
  constructor(private router: Router) {}
  ngOnInit(): void {

  }
    createItem() {
    this.router.navigate(['area/create'])
  }
}

