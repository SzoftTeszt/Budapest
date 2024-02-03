import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(tomb:any[]):any {
    if (!tomb) return null;
    tomb=tomb.sort(
      (a:any, b:any)=>{return Number(a.evszam)-Number(b.evszam)}
    )
    return tomb
  }

}
