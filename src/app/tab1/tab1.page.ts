import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../intefaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


  peliculasRecientes : Pelicula[] =[];
  peliculasPopulares : Pelicula[] = [];

  constructor(private movieService : MoviesService) {}

  ngOnInit(){
    this.movieService.getFeatures().subscribe((peliculas) =>{
      console.log(peliculas.results);
      this.peliculasRecientes = peliculas.results;
      }
    );

    this.getPopulares();
  }

  cargarMas(){
    this.getPopulares();
  }

  getPopulares(){
    this.movieService.getPopulares().subscribe((populares) =>{
      const arrTemporal = [... this.peliculasPopulares, ... populares.results];
      this.peliculasPopulares = arrTemporal;
    });
  }
}
