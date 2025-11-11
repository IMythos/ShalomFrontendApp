import { CommonModule } from '@angular/common';
import { Component, inject, Signal, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Auth } from '../../core/services/auth';
import { Router, RouterLink } from '@angular/router';
import { AdminPage } from "../../pages/dashboard/admin-page/admin-page";
import { LoginModal } from "../login-modal/login-modal";

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatIconModule, RouterLink, LoginModal],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private authService = inject(Auth);
  private router = inject(Router);

  public isAuthenticated: Signal<boolean> = this.authService.isAuthenticated$;
  public userDisplayName: Signal<string | null> = this.authService.userDisplayName$;

  public menuOpen = signal(false);
  public isModalOpen = signal(false);

  navigateOrProtect(path: string): void {
    if (this.isAuthenticated()) {
      this.router.navigate([path]);
    } else {
      this.isModalOpen.set(true);
    }
  }

  onLogin(): void {
    this.router.navigate(['/client/login']);
    this.menuOpen.set(false);
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/client/login']);
    this.menuOpen.set(false);
  }

  onRegister(): void {
    this.router.navigate(['client/register']);
    this.menuOpen.set(false);
  }

  toggleMenu() {
    this.menuOpen.update(open => !open);
  }
}
