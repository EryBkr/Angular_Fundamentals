import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RoleService } from 'src/lib/services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit, OnDestroy {

  rolesData;

  //Unsubscribe kullanımı için oluşturduğumuz değişkenler
  subs1: Subscription;
  subs2: Subscription;

  constructor(private roleService: RoleService) { }

  //Component in yaşam ömrü bittiği zaman yapılacak işlemler
  ngOnDestroy(): void {
    //subscribe işlemleri memory leak oluşturur.
    //Bundan dolayı component ile işimiz bittiği zaman bu işlemi yapmamız performans açısından önemlidir.
    this.subs1.unsubscribe();
    this.subs2.unsubscribe();
  }

  //Component başlatıldığı an yapılacak işlemler
  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    //Servis tarafından observable döndüğü için subscribe olmamız gerekiyor
    this.subs1 = this.roleService.getAllRoles().subscribe(data => {
      this.rolesData = data;
      console.log("data" + data);
    });
  }

  //Post
  addNewRole(roleForm: NgForm) {
    //Formdan gelen datayı servise veriyoruz akabinde getRoles i tekrar çalıştırarak datanın
    //UI tarafında tekrar görünmesini sağlıyorum
    this.subs2 = this.roleService.addRole(roleForm.value).subscribe(data => {
      this.getRoles();
      //Deneme amaçlı bir servis kullandığımız için alert ile göstereceğiz
      alert("Başarıyla eklendi: " + data.title);
    }, error => {
      alert("Problem oldu");
    });


  }

  //Put
  updateRole(roleForm: NgForm) {
    //Formdan gelen datayı servise veriyoruz akabinde getRoles i tekrar çalıştırarak datanın
    //UI tarafında tekrar görünmesini sağlıyorum
    this.roleService.updateRole(roleForm.value).subscribe(data => {
      this.getRoles();
      //Deneme amaçlı bir servis kullandığımız için alert ile göstereceğiz
      alert("Başarıyla güncellendi: " + data.title);
    }, error => {
      alert("Problem oldu");
    });
  }

  //Delete
  deleteRole(roleForm: NgForm) {
    //Formdan gelen datanın id bilgisini servise veriyoruz akabinde getRoles i tekrar çalıştırarak
    //UI tarafına refresh atmış oluyoruz
    this.roleService.deleteRole(roleForm.value.id).subscribe(data => {
      this.getRoles();
      //Deneme amaçlı bir servis kullandığımız için alert ile göstereceğiz
      alert("Başarıyla Silindi: " + data.title);
    }, error => {
      alert("Problem oldu");
    });
  }

}
