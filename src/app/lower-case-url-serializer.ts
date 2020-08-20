import { DefaultUrlSerializer, UrlTree } from '@angular/router';

/**
 * Elimina el case-sensitive de la url pasándola a minúsculas.
 */
export class LowerCaseUrlSerializer extends DefaultUrlSerializer {

    /**
     * Métdo que realiza la conversión de la url a minúsculas.
     * 
     * @param url - dirección a tratar.
     */
    parse(url: string): UrlTree {
        return super.parse(url.toLowerCase());
    }
}