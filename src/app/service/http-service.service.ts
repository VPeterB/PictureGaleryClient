import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = "https://photo-galery-server-git-vida-peter1127-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/api";
  }

  get(uri: string): Observable<any>{
    return this.http.get<any>(`${this.ROOT_URL}/${uri}`);
  }

  getPic(uri: string): Observable<any>{
    return this.http.get<any>(`${this.ROOT_URL}/${uri}`, { responseType: 'blob' as 'json' });
  }

  delete(uri: string): Observable<any>{
    return this.http.delete<any>(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, body: any): Observable<any>{
    return this.http.post<any>(`${this.ROOT_URL}/${uri}`, body);
  }
}
