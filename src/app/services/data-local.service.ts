import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../intefaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas : PeliculaDetalle[] =[];

  constructor(private storage: Storage,
    private toast : ToastController) {
      this.cargarFavoritos();
     }

  guardarPelicula(pelicula : PeliculaDetalle){

    let existe = false;
    let mensaje = '';

    for(const peli of this.peliculas){
      if(peli.id === pelicula.id ){
        existe = true;
        break;
      }
    }

    if(existe){
      this.peliculas = this.peliculas.filter(peli => peli.id !== pelicula.id);
      mensaje = 'Removido de favoritos'
    }else{
       this.peliculas.push(pelicula);
       mensaje ='Agregado a favoritos'
    }

    this.presentToast(mensaje);
    this.storage.set('peliculas', this.peliculas);  

    return !existe;
  }

  async presentToast(message : string) {
    const toast = await this.toast.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  async cargarFavoritos(){
    const peliculas = await this.storage.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;
  }

  async existePelicula(id){
    await this.cargarFavoritos();
    const existe = this.peliculas.find(peli => peli.id === id);
    return (existe) ? true : false;
  }
}
