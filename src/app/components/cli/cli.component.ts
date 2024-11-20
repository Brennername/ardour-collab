import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cli',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cli.component.html',
  styleUrl: './cli.component.scss'
})
export class CliComponent {

  oscCommand = '';
  data: any;
  constructor(private http: HttpClient) {}

  sendOscCommand() {
    console.log("got here 1: " + this.oscCommand);
    const sanitizedCommand = this.sanitizeInput(this.oscCommand);

    this.http.post('http://127.0.0.1:3000/send-osc-command', { oscCommand: sanitizedCommand })
      .subscribe(
        response => { console.log(response); this.data = response; },
        error => console.error(error)
      );
  }

  // Basic sanitization example (adjust as needed)
  sanitizeInput(input: string): string {
    return input.trim().replace(/['";]/g, '\\$&');
  }

}
