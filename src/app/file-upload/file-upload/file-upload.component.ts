import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/lib/services/upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor(private fileUpload:UploadService) { }

  fileToUpload: File = null;

  ngOnInit(): void {
  }

  //Geçiçi değişkene resmi verdik
  handFileInput(filelist: FileList) {
    this.fileToUpload = filelist.item(0);
  }

  //Değişkendeki resmi servise gönderiyoruz
  uploadFiles(){
    this.fileUpload.uploadFile(this.fileToUpload).subscribe(resp=>{
      alert("İşlem Yapıldı");
    });
  }

}
