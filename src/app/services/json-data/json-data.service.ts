import { Injectable } from '@angular/core';
import webData from '../../../_files/data.json';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

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


  constructor() { }

  public getInfoJson(){
    return webData;
  }

}
