import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportStripComponent } from './transport-strip.component';

describe('TransportStripComponent', () => {
  let component: TransportStripComponent;
  let fixture: ComponentFixture<TransportStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportStripComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransportStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
