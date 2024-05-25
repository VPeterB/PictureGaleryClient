import { NgModule } from '@angular/core';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import {Route, RouterModule} from '@angular/router';
import {RoleGuard} from "./service/role.guard";
import {PhotoComponent} from "./component/photo/photo.component";
import {UploadComponent} from "./component/upload/upload.component";

const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'photo/:photoId', component: PhotoComponent},
  { path: 'upload', component: UploadComponent, canActivate: [RoleGuard], data: {roles: ['USER']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
