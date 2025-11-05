import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-client-page',
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './register-client-page.html',
  styleUrl: './register-client-page.css'
})
export class RegisterClientPage implements OnInit {
  private router = inject(Router);
  private fb = inject(FormBuilder);

  registerForm!: FormGroup;

  ngOnInit(): void {
      this.registerForm = this.fb.group({
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        dni: ['', Validators.maxLength(8)],
        phone: ['', Validators.pattern('^[0-9+]*$')],
        address: [''],
        role: ['CLIENT', Validators.required]
      });
  }

  onRegisterSubmit(): void {
    if (this.registerForm.valid) {

    } else {
      console.error('El formulario no es valido.');
      this.registerForm.markAllAsTouched();
    }
  }

  goToClientHome(): void {
    this.router.navigate(['/client']);
  }
}
