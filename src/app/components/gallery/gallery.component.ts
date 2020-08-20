import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonDataService } from '../../services/json-data/json-data.service';
import { TxtDataService } from '../../services/txt-data/txt-data.service';


/**
 * Componente para la sección para la galeria de fotos. gallery.
 */
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  /**
   * variable para subcribirse a la petición http.
   */
  private subscription: any;

  /**
   * información para configurar la aplicación.
   */
  public info : any = this.jsonDataService.info; 

  /**
   * descripción de la categoria a mostrar.
   */
  public description : String = "";

  /**
   * almacena la url actual.
   * @ignore
   */
  private href: String[] = [];

  /**
   * almacena la categoria actual.
   * @ignore
   */
  private option: String = "";
  
  /**
   * almacena el elemento del menu principal actual.
   */
  public itemMenu: any;

  /**
   * Información para mostrar en el dialog.
   */
  public modalViewElement: any = {};
  
  /**
   * constructor del componente
   * @param jsonDataService - servicio acceso al data.json
   * @param txtDataService - servicio acceso mediante httpClient
   * @param router - modulo de routing 
   */
  constructor(private jsonDataService : JsonDataService, 
              private txtDataService : TxtDataService, 
              private router : Router) {
  }

  /**
   * Recupera la información para configurar la aplicación.
   * El evento se ejecuta al iniciarse el componente.
   */
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

  /**
   * elimina la subscripción de la petición http.
   * El evento se ejecuta al destruir el componente.
   */
  ngOnDestroy() {
    if( this.subscription != undefined ){
      this.subscription.unsubscribe()
    }
  }

  /**
   * Actualiza la información a mostar en el dialog.
   * @param img - imagen que se quiere mostrar en el dialog.
   */
  updateModalImg(img:String){
    this.itemMenu.elements.forEach(element => {
      if( element['img'] == img){
        this.modalViewElement = element;
        return;
      }
    });
  }
}
