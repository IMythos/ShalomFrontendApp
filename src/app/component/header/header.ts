import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update(open => !open);
  }
}
