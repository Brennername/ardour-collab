import { Component } from '@angular/core';
import { ComponentsModule, TransportPlayButtonComponent, TransportStopButtonComponent } from '../../components/components.module';


@Component({
  selector: 'app-transport-strip',
  standalone: true,
  imports: [ComponentsModule, TransportPlayButtonComponent, TransportStopButtonComponent ],
  templateUrl: './transport-strip.component.html',
  styleUrl: './transport-strip.component.scss'
})
export class TransportStripComponent {

}
