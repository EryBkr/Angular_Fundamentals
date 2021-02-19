import { Pipe, PipeTransform } from '@angular/core';

//Custom pipe işlemlerini tanımladığımız ts dosyasıdır
//ng g pipe tlConvert --skip-import komutu ile otomatik oluşturulmaktadır

@Pipe({
  name: 'tlConvert'
})
export class TlConvertPipe implements PipeTransform {
//value pipe a gönderilen değer,args ise pipe ın ekstra özellikleri olabilir.
//Birçok pipe da ekstra özellik mevcuttur
  transform(value: unknown, ...args: unknown[]): unknown {
    return "₺" +value+" mevcut para";
  }

}
