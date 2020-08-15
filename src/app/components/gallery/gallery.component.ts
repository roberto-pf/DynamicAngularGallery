import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonDataService } from '../../services/json-data/json-data.service';
import { TxtDataService } from '../../services/txt-data/txt-data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private subscription: any;

  public info : any = this.jsonDataService.info; 

  private href: String[] = [];
  private option: String = "";
  
  public itemMenu: any;
  public modalViewElement: any = {};
  public description : String = "";
  

  constructor(private jsonDataService : JsonDataService, 
              private txtDataService : TxtDataService, 
              private router : Router) {
  }

  ngOnInit(): void{
    this.href = this.router.url.split("/");
    this.option = this.href[ this.href.length-1 ];

    this.info.menu.forEach(element => {
      if( element['keyItemMenu'] == this.option){
        this.itemMenu = element;

        this.subscription = this.txtDataService.getText( "../../../_files/" + this.option + "/" + "description.txt")
          .subscribe((data:any) => {
            this.description = data;
        });

      }
    });
    if( this.subscription == undefined ){
      this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(() => this.router.navigate(['notFound']));
    }

  }

  ngOnDestroy() {
    if( this.subscription != undefined ){
      this.subscription.unsubscribe()
    }
  }

  updateModalImg(img:String){
    this.itemMenu.elements.forEach(element => {
      if( element['img'] == img){
        this.modalViewElement = element;
        return;
      }
    });
  }
}
