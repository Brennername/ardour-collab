import { Component } from '@angular/core';

@Component({
  selector: 'app-transport-play-button',
  standalone: true,
  imports: [],
  templateUrl: './transport-play-button.component.html',
  styleUrl: './transport-play-button.component.scss'
})
export class TransportPlayButtonComponent {

  play() {
    console.log("transport-play-button does nothing yet, this is a stub");
  }

}
