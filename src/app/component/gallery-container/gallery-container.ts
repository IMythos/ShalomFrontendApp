import { Component } from '@angular/core';
import { IGalleryCardComponent } from '../../core/models/gallery-model';
import { CommonModule } from '@angular/common';
import { GalleryCard } from '../gallery-card/gallery-card';

@Component({
  selector: 'app-gallery-container',
  imports: [CommonModule, GalleryCard],
  templateUrl: './gallery-container.html',
  styleUrl: './gallery-container.css'
})
export class GalleryContainer {
  public galleryItems: IGalleryCardComponent[] = [
    {
      id: 1,
      path: 'assets/agency/luna-pizarro-lima.jpg',
      city: 'Lima / La Victoria',
      address: 'Jr. Luna Pizarro 701, Lima, Perú'
    },
    {
      id: 2,
      path: 'assets/agency/elmer-faucett-callao.jpg',
      city: 'Lima / Callao',
      address: 'Av. Elmer Faucett 435, Lima, Perú'
    },
    {
      id: 3,
      path: 'assets/agency/jose-galvez-pucallpa.jpg',
      city: 'Ucayali / Pucallpa',
      address: 'Jr. Jose Galvez 147, Ucayali, Perú'
    },
    {
      id: 4,
      path: 'assets/agency/parra-arequipa.jpg',
      city: 'Arequipa / Perú',
      address: 'Av. Parra 357, Arequipa, Perú'
    },
    {
      id: 5,
      path: 'assets/agency/barranca-lima.jpg',
      city: 'Lima / Barranca',
      address: 'Jr. Lima 1332, Lima, Barranca'
    }
  ];

  getCardClasses(id: number): string {
        let gridClasses = '';
        let heightClass = 'h-full';

        switch (id) {
            case 1: gridClasses = 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2'; break;

            case 2:
                gridClasses = 'lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3';
                heightClass = 'h-full custom-stretch';
                break;
            case 3: gridClasses = 'lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2'; break;
            case 4: gridClasses = 'lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3'; break;
            case 5: gridClasses = 'lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3'; break;
            default: gridClasses = 'lg:col-span-1 lg:row-span-1'; break;
        }

        return `sm:col-span-2 lg:col-span-1 ${gridClasses} ${heightClass}`;
    }
}
