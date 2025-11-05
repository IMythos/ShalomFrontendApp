import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, MatIconModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  public currentYear: number;
  public email: string = '';

  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  onSubmitSubscription(): void {
    console.log("Subscripcion solicitada para: ", this.email);
  }
}
