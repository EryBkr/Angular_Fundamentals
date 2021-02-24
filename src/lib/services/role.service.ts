import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  //Environments dosyamda ki base url i alıyorum
  baseUrl = environment.api.nestjs.role;

  //Module tarafında eklemiş olduğum http modülünü DI ile oluşturuyorum
  constructor(private http: HttpClient) { }

  //Bu metot observable<model> dönecek bu yüzden component tarafında subscribe olmamız gerekiyor
  getAllRoles() {
    //http modulünü kullanarak ve gerekli endpoint i vererek get isteğimi yapıyorum
    return this.http.get<any>(this.baseUrl);
}

//Post isteğinde doğal olarak post edeceğimiz datayıda vermemiz gerekiyor
addRole(role:any){
  return this.http.post<any>(this.baseUrl,role);
}

//Put isteğinde doğal olarak put edeceğimiz datayıda vermemiz gerekiyor
//url/{id} şeklinde istek atmamız gerekiyor
updateRole(role:any){
  return this.http.put<any>(this.baseUrl+`/${role.id}`,role);
}

//delete isteğinde doğal olarak id göndermemiz gerekiyor
//url/{id} şeklinde istek atmamız gerekiyor
deleteRole(id:any){
  return this.http.delete<any>(this.baseUrl+`/${id}`);
}

}
