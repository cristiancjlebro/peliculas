import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'imagen'
})
export class ImagePipe implements PipeTransform {

  url = environment.imgPath;

  transform(imagen : string, size : string = 'w400'): string {

    if(!imagen){
      return;
    }
    
    const urlImg =  `${this.url}${size}${imagen}`;
    return urlImg;  

  }

}
