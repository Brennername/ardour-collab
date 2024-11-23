import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageButtonComponent } from './image-button.component';

describe('ImageButtonComponent', () => {
  let component: ImageButtonComponent<any>;
  let fixture: ComponentFixture<ImageButtonComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
