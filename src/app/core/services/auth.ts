import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal } from '@angular/core';
import { LoginRequest, LoginResponse } from '../models/auth-model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/auth';

  private _isAuthenticated = signal<boolean>(this.checkInitialAuthStatus());
  public isAuthenticated$: Signal<boolean> = this._isAuthenticated.asReadonly();

  private _userDisplayName = signal<string | null>(this.getInitialDisplayName());
  public userDisplayName$: Signal<string | null> = this._userDisplayName.asReadonly();

  private checkInitialAuthStatus(): boolean {
    const token = localStorage.getItem('jwt-token');
    return !!token;
  }

  private getInitialDisplayName(): string | null {
    return localStorage.getItem('user_email');
  }

  login(request: LoginRequest): Observable<LoginResponse> {
    const loginUrl = `${this.apiUrl}/client/login`;

    return this.http.post<LoginResponse>(loginUrl, request)
      .pipe(
        tap(response => {
          if (response.success && response.data) {
            this.saveAuthData(response.data.token, response.data.role, request.email);
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('user_role');
    localStorage.removeItem('user_email');

    this._isAuthenticated.set(false);
    this._userDisplayName.set(null);
  }

  private saveAuthData(token: string, role: string, email: string): void {
    localStorage.setItem('jwt_token', token);
    localStorage.setItem('user_role', role);
    localStorage.setItem('user_email', email);

    this._isAuthenticated.set(true);
    this._userDisplayName.set(email);
  }

  public getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  public isAuthenticated(): boolean {
    return this._isAuthenticated();
  }

  public getUserRole(): string | null {
    return localStorage.getItem('user_role');
  }
}
