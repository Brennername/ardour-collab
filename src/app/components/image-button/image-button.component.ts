import { Component, Input } from '@angular/core';
import { Stratagem } from './Stratagem.interface';

@Component({
  selector: 'app-image-button',
  templateUrl: './image-button.component.html',
  styleUrls: ['./image-button.component.scss'],
  standalone: true
})
export class ImageButtonComponent<T>  {

  @Input() stratagem: Stratagem<T> = {
    //init empty. Is this going to cause a bug?
    imageUrl: '',
    onClick: () => { },
   
  };


  handleClick() {
    if (this.stratagem.onClick) {
      this.stratagem.onClick();
    }
  }
}
