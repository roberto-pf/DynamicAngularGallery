import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { JsonDataService } from './services/json-data/json-data.service';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

/**
 * Para quitar el error del $.
 */
declare let $: any;

/**
 * Componente principal
 * 
 * @example
 * <app-root></app-root>
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * información para configurar la aplicación.
   */
  public info : any = this.jsonDataService.info;


  /**
   * constructor del componente
   * @param jsonDataService - servicio acceso al data.json
   * @param router - modulo de routing 
   * @param libray - librería de iconos
   */
  constructor( private jsonDataService : JsonDataService, private router: Router, private library: FaIconLibrary) { 
    /**
     * añadir a la libreria de iconos los que vamos a necesitar.
     */
    library.addIconPacks(fas, fab);
  }

  /**
   * método que hace la redirección a la url indicada usando el routing.
   * 
   * @param url - dirección a la que redirigirse
   */
  redirect(url:string) {
    this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(() => this.router.navigate([url]));
  }


  /**
   * repliega el navbar.
   */
  repliega() {
    $('.navbar-collapse').collapse('hide');
    window.scrollTo(0, 0);

  }
}
