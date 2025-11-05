import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login-client-page',
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './login-client-page.html',
  styleUrl: './login-client-page.css'
})
export class LoginClientPage implements OnInit {
  private router = inject(Router);
  private fb = inject(FormBuilder);

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLoginSubmit(): void {
    if (this.loginForm.valid) {

    } else {
      console.error('El formulario no es valido.');
      this.loginForm.markAllAsTouched();
    }
  }

  goToHome(): void {
    this.router.navigate(['/client']);
  }
}
