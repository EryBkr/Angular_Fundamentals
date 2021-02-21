import { FormControl } from "@angular/forms"

//Harf kontrolü yapan custom validator oluşturduk.Belirlediğimiz harf input değerinde var ise hata verecek
export const BlacklistValidator=(letter:string)=>{
  return (control:FormControl)=>{
    return control.value.toString().indexOf(letter)>-1 ? {blacklist:true}:null;
  }
}
