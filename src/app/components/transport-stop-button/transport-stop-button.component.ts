import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

import { OscService } from '../../../services/osc.service';

@Component({
  selector: 'app-transport-stop-button',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './transport-stop-button.component.html',
  styleUrl: './transport-stop-button.component.scss'
})
export class TransportStopButtonComponent {

  constructor(private oscService: OscService) { }

  stop() {
    this.oscService.oscCommand = '/transport_stop';
    this.oscService.sendOscCommand();
  }



}
