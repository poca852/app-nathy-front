import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {tap, map, catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../interfaces/auth.interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario(){
    return {...this._usuario}
  }

  constructor(private http: HttpClient) { }

  login(usuario: string, password: string){
    const url = `${this.baseUrl}/auth/login`;
    const body = {usuario, password};

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap( resp => {
          if(resp.ok){
            localStorage.setItem('token', resp.token!)
          }
        }),
        map( resp => resp.ok),
        catchError(err => of(err.error.msg))
      )
  }

  validarToken(): Observable<boolean>{
    const url = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(url, {headers})
      .pipe(
        map( resp => {
          localStorage.setItem('token', resp.token!);
          this._usuario = {
            nombre: resp.nombre!,
            uid: resp.id!
          }
          return resp.ok;
        }),
        catchError( err => of(false))
      )
  }

  logout(){
    localStorage.clear();
  }
}
