import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportStopButtonComponent } from './transport-stop-button.component';

describe('TransportStopButtonComponent', () => {
  let component: TransportStopButtonComponent;
  let fixture: ComponentFixture<TransportStopButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportStopButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransportStopButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
