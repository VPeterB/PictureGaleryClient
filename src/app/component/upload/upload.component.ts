import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpServiceService} from "../../service/http-service.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  photoForm: FormGroup;
  selectedFile: File;

  constructor(private webService: HttpServiceService, private fb: FormBuilder, private router: Router) {
    this.initPhotoForm();
  }

  initPhotoForm() {
    this.photoForm = this.fb.group({
      file: [null, Validators.required],
      name: ['']
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFile = input.files[0];
    }
  }

  uploadPhoto() {
    if (this.selectedFile) {
      let photoName = this.photoForm.get('name')?.value;
      if (!photoName || photoName.length < 40) {
        photoName = this.generateRandomName();
      }

      const formData = new FormData();
      formData.append('file', this.selectedFile); // Use the selectedFile directly
      formData.append('name', photoName);

      this.webService.post('pictures/upload', formData).subscribe(
        (response) => console.log('Sikeres feltöltés:', response),
        (_) => this.redirectToHome()
      );
    } else {
      console.error('A fájl mező kitöltése kötelező.');
    }
  }

  generateRandomName(): string {
    let randomName = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 40; i++) {
      randomName += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomName;
  }

  redirectToHome() {
    this.router.navigate(['home'])
  }
}
