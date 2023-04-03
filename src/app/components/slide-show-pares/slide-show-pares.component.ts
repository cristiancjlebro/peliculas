import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/intefaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slide-show-pares',
  templateUrl: './slide-show-pares.component.html',
  styleUrls: ['./slide-show-pares.component.scss'],
})
export class SlideShowParesComponent implements OnInit {

  constructor( private modalCtrl : ModalController) { }
  @Input() peliculas : Pelicula[];
  @Output() caragarMas = new EventEmitter();
  
  slideOpts = {
    slidesPerView: 3.2,
    freeMode: true,
    spaceBetween: -10
  };

  ngOnInit() {}

  cargarMas(){
    this.caragarMas.emit();
  }

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
