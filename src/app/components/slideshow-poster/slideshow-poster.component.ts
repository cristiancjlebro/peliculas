import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/intefaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() peliculas : Pelicula[];
  @Input() Id;

  slideOpts = {
    slidesPerView : 3.2,
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
