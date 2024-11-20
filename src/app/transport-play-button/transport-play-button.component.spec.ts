import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportPlayButtonComponent } from './transport-play-button.component';

describe('TransportPlayButtonComponent', () => {
  let component: TransportPlayButtonComponent;
  let fixture: ComponentFixture<TransportPlayButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportPlayButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransportPlayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
