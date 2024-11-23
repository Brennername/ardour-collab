import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CliComponent } from './components/cli/cli.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OscService } from '../services/osc.service';
import { TransportStripComponent } from "./features/transport-strip/transport-strip.component";
import { ComponentsModule } from './components/components.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CliComponent, HttpClientModule, TransportStripComponent, ComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [OscService, HttpClient]
})
export class AppComponent {
  title = 'ardour-collab';
}
