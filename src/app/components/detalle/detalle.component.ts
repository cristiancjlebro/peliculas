import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PeliculaDetalle, RespuestaCredits } from 'src/app/intefaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  peliculaDetalle : PeliculaDetalle;
  respuestCredits : RespuestaCredits;
  iconoFavorito = 'star-outline';
  overview : number = 200;
  slideOption = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  }

  constructor(private movieService : MoviesService, 
    private modalCtrl : ModalController,
    private dataLocal : DataLocalService) { }

   ngOnInit() {

    this.dataLocal.existePelicula(this.id)
      .then(existe => this.iconoFavorito = (existe) ? 'star' : 'star-outline');

    this.movieService.getDetallePelicula(this.id).subscribe(pelicula =>{
      this.peliculaDetalle = pelicula;
    });

    this.movieService.getActoresPelicula(this.id).subscribe(actores =>{
      console.log(actores);
      this.respuestCredits = actores;
    });
  }

  regresar(){
    this.modalCtrl.dismiss();
  }

  favorito(){
    const existe = this.dataLocal.guardarPelicula(this.peliculaDetalle);
    this.iconoFavorito = (existe) ? 'star' : 'star-outline';
  }

}
