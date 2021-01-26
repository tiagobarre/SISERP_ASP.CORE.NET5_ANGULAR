import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*Este serviço envia solicitações HTTP POST de inscrição e login para o back-end.*/

const AUTH_API = 'https://localhost:44310/api/Usuario/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }

login(username: string, password: string): Observable<any> {
  return this.http.post(AUTH_API, {
    username,
    password
  }, httpOptions);
}



}
