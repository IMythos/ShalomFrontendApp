import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryContainer } from './gallery-container';

describe('GalleryContainer', () => {
  let component: GalleryContainer;
  let fixture: ComponentFixture<GalleryContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
