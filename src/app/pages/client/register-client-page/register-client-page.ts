import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Auth } from '../../../core/services/auth';
import { RegisterRequest } from '../../../core/models/register-model';

@Component({
  selector: 'app-register-client-page',
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './register-client-page.html',
  styleUrl: './register-client-page.css'
})
export class RegisterClientPage implements OnInit {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private authService = inject(Auth);

  registerForm!: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

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
      this.errorMessage = null;
      this.successMessage = null;

      const request: RegisterRequest = this.registerForm.value;

      this.authService.register(request).subscribe({
        next: (response) => {
          if (response.success) {
            console.log('Registro exitoso: ', response.message);
            this.successMessage = response.message || 'Registro exitoso. Ahora puedes iniciar sesion.';

            setTimeout(() => {
              this.goToClientHome();
            }, 2000);
          } else {
            this.errorMessage = response.message || 'Error al registrar el usuario.';
          }
        },
        error: (error) => {
          console.error("Error en el registro: ", error);
          this.errorMessage = error.error?.message || 'Error de conexion o el usuario ya existe.';
        }
      });
    } else {
      console.error('El formulario no es valido.');
      this.registerForm.markAllAsTouched();
    }
  }

  goToClientHome(): void {
    this.router.navigate(['/client']);
  }
}
