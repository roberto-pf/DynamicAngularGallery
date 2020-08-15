import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})
export class TxtDataService {

  constructor(private httpClient: HttpClient) { }


  getText(url:string){
    return this.httpClient.get(url, {responseType: 'text'});
  }

}
