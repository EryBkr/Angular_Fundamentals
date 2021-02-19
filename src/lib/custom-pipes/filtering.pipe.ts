import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): unknown {
    let result:any[]=[];

    value.forEach(element => {
      //Parametrenin 0 ncı elemanı bize gönderdiğimiz parametreyi dönmektedir.
      //Biz bu parametreyi her bir şehir için kontrol edip dahil ise result array ine atıyoruz
      //Akabinde result u dönüyoruz ve işlem tamam
      const isExistLetter=element.includes(args[0].toString());
      if(isExistLetter){
        result.push(element);
      }
    });

    return result;
  }

}
