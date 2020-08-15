import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../../services/json-data/json-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  info : any = this.jsonDataService.info; 

  constructor(private jsonDataService : JsonDataService) { }

  ngOnInit(): void {
  }

}
