import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IGalleryCardComponent } from '../../core/models/gallery-model';

@Component({
  selector: 'app-gallery-card',
  imports: [CommonModule],
  templateUrl: './gallery-card.html',
  styleUrl: './gallery-card.css'
})
export class GalleryCard {
  item = input.required<IGalleryCardComponent>();
}
