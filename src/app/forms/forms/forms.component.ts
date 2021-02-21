import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from "@angular/forms"; //Reactive formları kullanmak için import ettik
import { BlacklistValidator } from 'src/lib/custom-validators/blacklist.validator';
import { WhiteSpaceValidator } from 'src/lib/custom-validators/no-white-space.validator';
import { userNameExistValidator } from 'src/lib/custom-validators/user-name-exist.validator';
import { UserService } from 'src/lib/services/user.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {


  //FormGroup Nesnemiz
  registerForm:FormGroup;

  //Form Post Edildikten sonra Bind edilecek user objemiz
  user={
    userName:"eray",
    age:0
  };

  //DI ile userService i instance ettik.gerekli modulün providers ına eklediğimiz için instance oluşabilecektir.
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    //Component yüklenmeden önce çalışması için metodu çalıştırdık
    this.resetForm();
  }

  //Submit işlemi neticesinde çalışacak olan metodumuz
  save(event:any){
    //Formdan gelen değerler user objesine bind ediliyor
    this.user=event.value;
    console.log(this.user);
  }

  resetForm(){
    this.registerForm=new FormGroup({
      //user var ise değeri yok ise empty olarak atadık
      userName:new FormControl(this.user ? this.user.userName : "",{
        validators:
        [
          Validators.required,
          Validators.minLength(3),
          BlacklistValidator("ğ"),
          WhiteSpaceValidator],
          asyncValidators:[userNameExistValidator(this.userService)],
          updateOn:"blur"
      }),
      //İlk parametre input değeridir,ikinci parametre ise validasyon kurallarını barındırır
      //custom oluşturduğumuz BlacklistValidator umuzu ve WhiteSpace validatorumuzu tanımladık
      //updateOn parametresi inputtan çıkana kadar validasyon uyarılarını bize vermeyecektir
      //async validators parametresi geriye observable dönen bir validator alır.biz buradaki örnekte service istek attık.Ve parametre olarak servisimizi tanımladık
      age:new FormControl(this.user.age ? this.user.age : 0)
    });
  }

}
