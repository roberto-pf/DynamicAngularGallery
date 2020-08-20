import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 


/**
 * Servicio para acceso via httpClient.
 */
@Injectable({
  providedIn: 'root'
})
export class TxtDataService {

  /**
   * constructor del componente
   * @param httpClient - cliente http.
   */
  constructor(private httpClient: HttpClient) { }


  /**
   * Recupera el contenido del fichero pedido.
   * 
   * @param url - dirección del fichero a buscar
   * @returns - contenido del fichero buscado
   */
  getText(url:string){
    return this.httpClient.get(url, {responseType: 'text'});
  }

}
