import { Component } from '@angular/core';
import { OscService } from '../../services/osc.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-transport-play-button',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './transport-play-button.component.html',
  styleUrl: './transport-play-button.component.scss'
})
export class TransportPlayButtonComponent {

  constructor(private oscService: OscService) { }

  play() {
    this.oscService.oscCommand = '/transport_play';
    this.oscService.sendOscCommand();
  }

}
