import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {HttpServiceService} from "../../service/http-service.service";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photoUrl: SafeUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpServiceService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit(): void {
    const photoId = this.route.snapshot.paramMap.get('photoId');
    if (photoId) {
      this.getPhoto(+photoId);
    }
  }

  getPhoto(id: number): void {
    this.httpClient.getPic(`pictures/${id}`)
      .subscribe(blob => {
        const objectURL = URL.createObjectURL(blob);
        this.photoUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      });
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }
}
