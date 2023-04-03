import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PeliculaDetalle, RespuestaCredits, RespuestaMDB } from '../intefaces/interfaces';
import { environment } from 'src/environments/environment';

const URL = environment.url;
const APIKEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private PopularesPage  = 0;
  constructor(private http : HttpClient) { }

  private ejecutarQuery<T>(query : string){
    query = URL + query;
    query += `&api_key=${APIKEY}&language=es&include_image_language=es`;

    return this.http.get<T>(query);
  }

  getFeatures(){
    // return this.http.get<RespuestaMDB>('https://api.themoviedb.org/3/discover/movie?language=es&include_image_language=es&primary_release_date.gte=2020-01-01&primary_release_date.lte=2020-08-22&api_key=9dccb7613151accb70f416d582cd5646');
    const hoy = new Date();
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    const mes = hoy.getMonth();
    let mesString;

    if (mes < 10){
      mesString = '0' + 1;
    }else{
      mesString = mes;
    }

    const fechaInicio = `${ hoy.getFullYear() }-${mesString}-01`
    const fechaFinal = `${ hoy.getFullYear() }-${mesString}-${ultimoDia}`
    debugger;

    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?language=es&include_image_language=es&primary_release_date.gte=${fechaInicio}&primary_release_date.lte=${fechaFinal}`);
  }

  getPopulares(){
    this.PopularesPage++;
    const query = `/discover/movie?sort_by=popula rity.desc&page=${this.PopularesPage}`;
    return this.ejecutarQuery<RespuestaMDB>(query);
  }

  getDetallePelicula(idMovie){
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${idMovie}?`);
  }

  getActoresPelicula(idMovie){
    return this.ejecutarQuery<RespuestaCredits>(`/movie/${idMovie}/credits?`);
  }

  getBuscarPelicula(pelicula){
    return this.ejecutarQuery(`/search/movie?query=${pelicula}`)
  }
}
