import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CliComponent } from './components/cli/cli.component';
import { HttpClientModule } from '@angular/common/http';
import { TransportPlayButtonComponent } from "./transport-play-button/transport-play-button.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CliComponent, HttpClientModule, TransportPlayButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ardour-collab';
}
