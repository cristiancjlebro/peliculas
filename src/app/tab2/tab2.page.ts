import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { Pelicula } from '../intefaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar : string ="";
  tendencias : string[] = ['Avengers','Pantera Negra','Star Wars','Lupin','Mujer Maravilla','Spiderman','Venom','Superman'];
  peliculas : Pelicula[] = [];
  buscando : boolean = false;

  constructor(private peliculasService : MoviesService, private modalCtrl : ModalController) {}

  buscar(event){
    const valor = event.detail.value;
    if(valor.length > 0){
      this.buscando = true;
      
      this.peliculasService.getBuscarPelicula(valor).subscribe(resp =>{
        this.peliculas = resp['results'];
        this.buscando = !this.buscando;
        console.log(resp);
      });
      return;
    }
    this.peliculas.length = 0;
  }

  async detalle(id:number){
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
