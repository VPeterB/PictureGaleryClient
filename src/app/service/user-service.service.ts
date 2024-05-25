import {Injectable} from "@angular/core";
import {HttpServiceService} from "./http-service.service";
import {AuthResponseDTO, UserDTO} from "../model/models.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService{
  user: UserDTO|undefined

  constructor(private webService: HttpServiceService, private router: Router) {}

  loginUser(res: AuthResponseDTO){
    localStorage.setItem('token', res.accessToken)
    localStorage.setItem('id', String(res.id))
    this.setUser(res.id)
  }

  logout() {
    this.removeUser()
    window.location.reload();
  }

  removeUser() {
    this.user = undefined
    localStorage.removeItem('token');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  private setUser(id: number){
    if(this.loggedIn){
      this.webService.get(`users/${id}`).subscribe({next: res => {this.user = res; this.router.navigate(['home'])}})
    }
  }

  public hasRole(role: string): boolean {
    if (this.user === undefined && localStorage.getItem('id')) {
      this.setUser(Number(localStorage.getItem('id')))
    }
    const user = this.user;
    if (!user || !user.roles) {
      return false;
    }
    return user.roles.includes(role);
  }

  public hasRoles(role: string[]): boolean{
    for(const r of role){
      if(this.hasRole(r)){
        return true
      }
    }
    return false
  }
}
