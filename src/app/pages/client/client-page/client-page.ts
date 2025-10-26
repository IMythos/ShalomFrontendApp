import { Component } from '@angular/core';
import { Header } from "../../../component/header/header";
import { Banner } from "../../../component/banner/banner";

@Component({
  selector: 'app-client-page',
  imports: [Header, Banner],
  templateUrl: './client-page.html',
  styleUrl: './client-page.css'
})
export class ClientPage {

}
