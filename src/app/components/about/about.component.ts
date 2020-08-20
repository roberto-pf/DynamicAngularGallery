import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../../services/json-data/json-data.service';

/**
 * Componente para la sección sobre mi. about.
 */
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
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
