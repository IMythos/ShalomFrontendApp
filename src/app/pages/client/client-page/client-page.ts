import { Component, inject, OnInit } from '@angular/core';
import { Header } from "../../../component/header/header";
import { Banner } from "../../../component/banner/banner";
import { Auth } from '../../../core/services/auth';
import { GalleryContainer } from "../../../component/gallery-container/gallery-container";
import { Footer } from "../../../component/footer/footer";
import { CallAction } from "../../../component/call-action/call-action";

@Component({
  selector: 'app-client-page',
  imports: [Header, Banner, GalleryContainer, Footer, CallAction],
  templateUrl: './client-page.html',
  styleUrl: './client-page.css'
})
export class ClientPage implements OnInit {
  private authService = inject(Auth);

  public userRole: string | null = null;
  public userEmail: string = 'Cliente';

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.userRole = this.authService.getUserRole();
      console.log(`Acceso concedido. Bienvenido ${this.userEmail}`);
    } else {
      console.warn('El usuario no esta autenticado.');
    }
  }
}
