import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { RouterModule, Routes } from '@angular/router';
import { UploadService } from 'src/lib/services/upload.service';

const routes:Routes=[
  {
    path:"",
    component:FileUploadComponent
  }
]


@NgModule({
  declarations: [FileUploadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[UploadService] //Resim Yükleme Servisimi provide ettim
})
export class FileUploadModule { }
