import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OscService {

  oscCommand: string = '';
  data: any;

  constructor(private http: HttpClient) { }

  // oscCommand accessor
  getOscCommand(): string {
    return this.oscCommand;
  }
  //oscCommand mutator
  setOscCommand(oscCommand: string) {
    this.oscCommand = oscCommand;
  }

  //data accessor
  getData(): any {
    return this.oscCommand;
  }
  //data mutator
  setData(data: any) {
    this.data = data;
  }


  sendOscCommand() {
    
    const sanitizedCommand = this.sanitizeInput(this.oscCommand);

    this.http.post('http://127.0.0.1:3000/send-osc-command', { oscCommand: sanitizedCommand })
      .subscribe(
        response => {  if (!this.data) { this.data = response; } },
        error => console.error(error)
      );
  }

  // Basic sanitization example (adjust as needed)
  sanitizeInput(input: string): string {
    return input.trim().replace(/['";]/g, '\\$&');
  }
}
