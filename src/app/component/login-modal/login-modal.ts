import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  imports: [MatIconModule, CommonModule],
  templateUrl: './login-modal.html',
  styleUrl: './login-modal.css'
})
export class LoginModal {
  private router = inject(Router);

  isOpen = input.required<boolean>();
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }

  goToLogin(): void {
    this.router.navigate(['/client/login']);
    this.closeModal();
  }

  goToRegister(): void {
    this.router.navigate(['/client/register']);
    this.closeModal();
  }
}
