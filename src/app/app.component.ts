import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { JsonDataService } from './services/json-data/json-data.service';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DynamicPortfolioGallery';

  info : any = this.jsonDataService.info;
  optionMenu : string = "";


  constructor( private jsonDataService : JsonDataService, private router: Router, private library: FaIconLibrary) { 
    library.addIconPacks(fas, fab);
  }

  redirect(url:string) {
    this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(() => this.router.navigate([url]));


  }
}
