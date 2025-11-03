import { CommonModule } from '@angular/common';
import { Component, inject, Signal, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Auth } from '../../core/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private authService = inject(Auth);
  private router = inject(Router);

  public isAuthenticated: Signal<boolean> = this.authService.isAuthenticated$;
  public userDisplayName: Signal<string | null> = this.authService.userDisplayName$;

  menuOpen = signal(false);

  constructor() {

  }

  onLogin(): void {
    this.router.navigate(['/client/login']);
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/client/login']);
  }

  onRegister(): void {
    this.router.navigate(['client/register']);
  }

  toggleMenu() {
    this.menuOpen.update(open => !open);
  }
}
