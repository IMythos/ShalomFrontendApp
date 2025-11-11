import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Auth } from '../../../core/services/auth';
import { LoginRequest } from '../../../core/models/auth-model';

@Component({
  selector: 'app-login-client-page',
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './login-client-page.html',
  styleUrl: './login-client-page.css'
})
export class LoginClientPage implements OnInit {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private authService = inject(Auth);

  loginForm!: FormGroup;
  errorMessage: string | null = null;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLoginSubmit(): void {
    if (this.loginForm.valid) {
      this.errorMessage = null;
      const request: LoginRequest = this.loginForm.value;

      this.authService.login(request).subscribe({
        next: (response) => {
          if (response.success) {
            this.goToHome();
          }
        },
        error: (error) => {
          console.error("Error en el login: ", error);
          this.errorMessage = error.error?.message || 'Error de conexion o credenciales invalidas.';
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  goToHome(): void {
    this.router.navigate(['/client']);
  }

  goToRegister(): void {
    this.router.navigate(['/client/register']);
  }
}
