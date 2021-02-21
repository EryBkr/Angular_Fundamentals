import { FormControl } from "@angular/forms"
import { timer } from "rxjs"
import { switchMap, map } from "rxjs/operators";


//Service aracılığıyla user name var mı yok mu kontrol ediliyor.Ona göre uyarı döneceğim
//userService.isExistName service ait bir metottur
export const userNameExistValidator = (userService: any, time: number = 500) => {
  return (input: FormControl) => {
    return timer(time).pipe(
      switchMap(() => userService.isExistName(input.value)),
      map(response => {
        return !response ? null : { userNameExist: true }
      })
    );
  };
};
