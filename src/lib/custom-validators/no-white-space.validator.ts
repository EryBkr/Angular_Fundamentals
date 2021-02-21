import { FormControl } from "@angular/forms";

export function WhiteSpaceValidator(control:FormControl){
   let result=false;
   //Girilen value de boşluk var mı onu kontrol ediyoruz
   if(control.value.toString().replace(/\s/g,"") === control.value){
    result=true;
   }
   else{
    result =false;
   }
   //Boşluk var ise whitespace i true olarak dönüyoruz
   return result ? null :{whitespace:true};
  }
