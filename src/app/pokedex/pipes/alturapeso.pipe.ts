import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alturapeso'
})
export class AlturapesoPipe implements PipeTransform {

  transform(valor: number): number {
    return (valor) / 10;
  }

}
