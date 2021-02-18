import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

//Custom directive oluşturacağımız ts dosyası
//ng g directive 'directive name' --skip-import komutu ile oluşturuyoruz

export class HighlightDirective {

  @Input() myColor:string; //Directive parametre göndermek istersek bu şekilde kullanabiliriz

  constructor(private element:ElementRef) {
    //element.nativeElement.style.backgroundColor="yellow";
    //Bu arkadaş kullanıldığı elementin arka planını sarı yapar
   }

   //Mouse hareketlerine göre de görsel dinamiklik kazandırılabilir
   //Bu örnekte component tarafından gelen değeri custom directive dosyamıza göndermiş olduk
   @HostListener('mouseover') onMouseOver() {
    this.element.nativeElement.style.backgroundColor="green";
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor=this.myColor;
  }

}
