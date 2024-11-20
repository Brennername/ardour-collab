import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OscService {

  oscCommand = '';
  data: any;
  
  constructor(private http: HttpClient) { }

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
