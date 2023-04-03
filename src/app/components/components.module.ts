import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideShowParesComponent } from './slide-show-pares/slide-show-pares.component';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
    SlideShowParesComponent,
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    DetalleComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    PipesModule
  ],
  exports :[
    DetalleComponent,
    SlideShowParesComponent,
    SlideshowPosterComponent,
    SlideshowBackdropComponent
  ]
})
export class ComponentsModule { }
