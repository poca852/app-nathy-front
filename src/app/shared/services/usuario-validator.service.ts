import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioValidatorService implements AsyncValidator {

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const usuario = control.value;
    return this.http.get<any[]>(`${environment.baseUrl}/usuarios?q=${usuario}`)
        .pipe(
            map( resp => {
                return (resp === null)
                    ? { noExisteUsuario: true}
                    : null
            })
        )
  }
}
