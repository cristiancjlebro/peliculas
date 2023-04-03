import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/intefaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  
  @Input() peliculas : Pelicula[];

  slideOpts = {
    slidesPerView : 1.2,
    spaceBetween: 0,
    slideShadows: true,
    freeMode : true
  };

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {}

  async verDetalle(id : string){
    const modal = await this.modalCtrl.create(
      {
        component : DetalleComponent,
        mode : "ios",
        componentProps : {
          id
        }

      }
    );

    modal.present();
  }

}
