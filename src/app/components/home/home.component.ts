import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../../services/json-data/json-data.service';


/**
 * Componente para la sección inicial. home.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  /**
   * información para configurar la aplicación.
   */
  public info : any = this.jsonDataService.info; 

  /**
   * constructor del componente
   * @param jsonDataService - servicio acceso al data.json
   */
  constructor(private jsonDataService : JsonDataService) { }


}
