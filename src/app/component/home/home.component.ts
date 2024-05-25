import { Component , OnInit} from '@angular/core';
import {UserServiceService} from "../../service/user-service.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpServiceService} from "../../service/http-service.service";
import {PhotoDTO} from "../../model/models.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  photos: PhotoDTO[] = [];
  isLoggedIn = false;

  constructor(private webService: HttpServiceService, private userService: UserServiceService, private router: Router, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.loggedIn
    this.getAllPhotos().subscribe(photos => this.photos = photos);
  }

  getAllPhotos(): Observable<PhotoDTO[]> {
    return this.webService.get('pictures/all');
  }

  deletePhoto(id: number) {
    this.webService.delete(`pictures/delete/${id}`).subscribe(_ => {
      this.photos = this.photos.filter(photo => photo.id !== id);
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['home']);
      });
    },
      _ => {
        this.photos = this.photos.filter(photo => photo.id !== id);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['home']);
        });
      }
    );
  }

  sortByName(): void {
    this.photos.sort((a, b) => a.filename.localeCompare(b.filename));
  }

  sortByDate(): void {
    this.photos.sort((a, b) => this.convertDate(a.creationDate).getTime() - this.convertDate(b.creationDate).getTime());
  }

  logout() {
    this.userService.logout()
  }

  redirectToUpload() {
    this.router.navigate(['upload'])
  }

  redirectToPicture(id: number) {
    this.router.navigate([`photo/${id}`])
  }

  formatDate(date: any): string | null {
    let formattedDate = this.convertDate(date)
    return this.datePipe.transform(formattedDate, 'yyyy-MM-dd, HH:mm');
  }

  convertDate(date: any): Date {
    let dateString = date.toString();
    let parts = dateString.split(',');
    return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]), Number(parts[3]), Number(parts[4]));
  }
}
