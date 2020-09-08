import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonDataService } from '../../services/json-data/json-data.service';
import { TxtDataService } from '../../services/txt-data/txt-data.service';

/**
 * Variable para utilización del plugin SwiperJs
 */
declare let Swiper: any;


/**
 * Componente para la sección para la galeria de fotos. gallery.
 */
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {

  /**
   * variable para subcribirse a la petición http.
   */
  private subscription: any;

  /**
   * información para configurar la aplicación.
   */
  public info: any = this.jsonDataService.info;

  /**
   * descripción de la categoria a mostrar.
   */
  public description: String = "";

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
  constructor(private jsonDataService: JsonDataService,
    private txtDataService: TxtDataService,
    private router: Router) {
      
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
        this.modalViewElement = this.itemMenu.elements[0];
        this.modalViewElement['img'] = "0001.jpg";

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
   * Inicializa los objetos Swiper de la aplicación
   */
  ngAfterViewInit() {
      let galleryThumbs = new Swiper('.gallery-thumbs-'+this.itemMenu['keyItemMenu'], {
        spaceBetween: 1,
        slidesPerView: 5,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });

      let galleryTop = new Swiper('.gallery-top-'+this.itemMenu['keyItemMenu'], {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        loopedSlides: 5, 
        preloadImages: false,
        lazy: true,
        thumbs: {
          swiper: galleryThumbs
        }
      });


    this.itemMenu.elements.forEach(element => {
      new Swiper('.gallery-vertical-'+element['dirName'], {
        direction: 'vertical',
        spaceBetween: 30,
        loop: true,
        lazy: true,
        pagination: {
          el: '.swiper-pagination-v',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          }
        }
      });
    });
  }


  /**
   * Actualiza la información a mostar en el dialog.
   * @param img - imagen que se quiere mostrar en el dialog.
   * @param dirName - directorio donde se encuentra la imagen a mostrar.
   */
  public updateModalImg(dirName: any, img: String) {
    this.itemMenu.elements.forEach(element => {
      if (element['dirName'] == dirName) {
        this.modalViewElement = element;
        this.modalViewElement['img'] = img + ".jpg";
        return;
      }
    });
  }


  /**
   * Devuelve una lista de elementos desde 1 hasta n con el formato 0000
   * @param n total de elementos a generar
   * @returns - numbers - Array<String>
   */
  public numSequence(n: number): Array<String> { 
    let numbers = new Array<String>(); 
    for(let i=1; i<=n; i++){
      numbers.push(  ("0000"+i).slice(-4)  );
    }
    return numbers; 
  } 
}
