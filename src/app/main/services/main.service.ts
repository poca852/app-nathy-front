import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cliente, Credito, Pago } from '../interfaces/main.interface';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCreditos(query: string){
    return this.http.get<Credito[]>(`${this.baseUrl}/creditos?estado=${query}`)
  }

  postCredito(prestado:number, cliente: string, cuotas: number){
    return this.http.post<Credito>(`${this.baseUrl}/creditos`, {prestado, cliente, cuotas})
      .pipe(
        map(resp => resp.ok),
        catchError(err => err.erro.msg)
      )
  }

  
  getCredito(id: string){
    return this.http.get<Credito>(`${this.baseUrl}/creditos/${id}`);
  }


  // Obtener clientes
  getClientes(query: boolean){
    return this.http.get<Cliente[]>(`${this.baseUrl}/clientes?estado=${query}`)
  }

  // optener un solo cliente
  getCliente(id:string){
    return this.http.get<Cliente>(`${this.baseUrl}/clientes/${id}`)
  }

  postPago(credito: string, pago: number){
    return this.http.post<Pago>(`${this.baseUrl}/pagos`, {credito, pago})
      .pipe(
        map( resp => resp.ok),
        catchError(err => of(err.error.msg))
      )
  }

  postCliente(cliente: Cliente){
    return this.http.post<Cliente>(`${this.baseUrl}/clientes`, cliente)
      .pipe(
        map(resp => resp.ok),
        catchError(err => of(err.error.msg))
      )
  }

  // obtener creditos
  // getCreditos(cliente: string){
  //   return this.http.get<Credito>(`${this.baseUrl}/creditos?cliente=${cliente}}`)
  // }

}
