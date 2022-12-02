import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrumaAboutComponent } from './bruma-about/bruma-about.component';
import { BrumaProductsComponent } from './bruma-products/bruma-products.component';

const routes: Routes = [
  {
    path: '', //cuando esta vacio..
    redirectTo: 'products', //Nos redirige en caso de estar vacio
    pathMatch: 'full', //indica  la cantidad de URL que debe coincidir.Establecer esta propiedad en full,se recomienda cuando tienes un path vacío para una ruta.
  },
  {
    path: 'products',
    component: BrumaProductsComponent
  },
  {
    path: 'about',
    component: BrumaAboutComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}