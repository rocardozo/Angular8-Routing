import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**Importamos las siguientes clases para trabajar con enrutamientos */
import {RouterModule, Route} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServiciosComponent } from './servicios/servicios.component';

/**Declaramos una constante con las rutas a utilizar*/
const routes: Route[] = [
  {path: 'about', component: AboutComponent},
  {path: 'servicios', component: ServiciosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)                       /**llamamos al metodo forRoot de la clase RouterModule y le pasamos como */
  ],                                                   /**parametro el array de routes */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
