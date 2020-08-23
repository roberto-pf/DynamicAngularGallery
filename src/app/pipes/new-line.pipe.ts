import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe que convierte los saltos de linea en saltos html.
 */
@Pipe({
  name: 'newLine'
})
export class NewLinePipe implements PipeTransform {

  /**
   * Metodo que realiza la transformación
   * @param value 
   * @param args 
   */
  transform(value: string, args: string[]): any {
      return value.replace(/(?:\r\n|\r|\n)/g, '<br />');
  }

}
