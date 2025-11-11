import { Component, EventEmitter, inject, Output, signal, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../core/services/auth';
import { LoginModal } from "../login-modal/login-modal";

@Component({
  selector: 'app-banner',
  imports: [LoginModal],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {
  private router = inject(Router);
  private authService = inject(Auth);

  public isAuthenticated: Signal<boolean> = this.authService.isAuthenticated$;
  public isModalOpen = signal(false);

  navigateOrProtect(path: string): void {
    if (this.isAuthenticated()) {
      this.router.navigate([path]);
    } else {
      this.isModalOpen.set(true);
    }
  }
}
