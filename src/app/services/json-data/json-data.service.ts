import { Injectable } from '@angular/core';
import webData from '../../../_files/data.json';


/**
 * Servicio que realiza el acceso a la información del data.json. El cuál,
 * contiene toda la información de configuración para la aplicación.
 */
@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

  /**
   * información para configurar la aplicación.
   */
  public info:{
    titleSite:string, 
    descriptionSite:string,
    favicon:string,
    logo:string,
    imgPrincipal:string,
    menu:{
      keyItemMenu:string,
      nameItemMenu:string,
      elements : {
        name:string,
        thumbail:string,
        img:string
      }[]
    }[],
    footer : {
      description:string
    },
    about : {
      mail:string,
      socialMedia:{
          imgIcon:string,
          url:string,
          userName:string
        }[]
    }
  } = this.getInfoJson();

  /**
   * Devuelve el contenido del fichero data.json
   * @returns - data.json
   */
  public getInfoJson(){
    return webData;
  }

}
