import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportPlayButtonComponent } from './transport-play-button/transport-play-button.component';
import { TransportStopButtonComponent } from './transport-stop-button/transport-stop-button.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, TransportPlayButtonComponent, TransportStopButtonComponent
  ],
  exports: [TransportPlayButtonComponent, TransportStopButtonComponent ]
})
export class ComponentsModule { }
export { TransportPlayButtonComponent, TransportStopButtonComponent };

