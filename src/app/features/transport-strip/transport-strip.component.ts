import { Component, ViewChild } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { ImageButtonComponent } from '../../components/image-button/image-button.component';
import { Stratagem } from '../../components/image-button/Stratagem.interface';
import { OscService } from '../../../services/osc.service';


@Component({
  selector: 'app-transport-strip',
  standalone: true,
  imports: [ComponentsModule, ImageButtonComponent ],
  templateUrl: './transport-strip.component.html',
  styleUrl: './transport-strip.component.scss'
})
export class TransportStripComponent {
@ViewChild(ImageButtonComponent) imageButton: ImageButtonComponent<any> | undefined;

constructor(private oscService: OscService) { }


stratagemClickHandler(data: any) {
  this.oscService.setOscCommand(data.oscCommand);
  this.oscService.setData(data);
  console.log("Sending command: " + data.oscCommand);
  this.oscService.sendOscCommand();
}


playStratagem: Stratagem<{ oscCommand: string }> = {
  imageUrl: '/assets/image-buttons/default_play_button.png',
  onClick: () => {
   this.stratagemClickHandler(this.playStratagem.data);
  },
  data: { oscCommand: '/transport_play'},

};

stopStratagem: Stratagem<{ oscCommand: string }> = {
  imageUrl: '/assets/image-buttons/default_stop_button.png',
  onClick: () => {
    this.stratagemClickHandler(this.stopStratagem.data);
  },
  data: { oscCommand: '/transport_stop' },
};
stratagem: any;

ngOnInit() {
  // if (this.imageButton) {
  // //this.imageButton.stratagem = this.playStratagem;
  // }
}

}
