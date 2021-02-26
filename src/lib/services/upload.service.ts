import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

//Resim yüklemek için kullanacağımız servis

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  //env ortamından da alınabilirdi
  connecionEndPoint = "BackEndUrl";

  constructor(private http: HttpClient) { }

  //Göndereceğimiz parametrenin tipi File
  uploadFile(file: File) {
    const formData:FormData=new FormData();
    //İlk parametre backend tarafında bind edilecek datanın ismidir
    formData.append("file",file);
    //Dosyayı backend e gönderiyoruz
    return this.http.post<any>(this.connecionEndPoint, formData);
  }
}
