import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../../services/json-data/json-data.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public info : any = this.jsonDataService.info; 

  constructor(private jsonDataService : JsonDataService) { }

  ngOnInit(): void {
  }

}
