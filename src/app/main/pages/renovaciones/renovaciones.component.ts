import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../interfaces/main.interface';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-renovaciones',
  templateUrl: './renovaciones.component.html',
  styleUrls: ['./renovaciones.component.css']
})
export class RenovacionesComponent implements OnInit {

  clientes: Cliente[] = []

  constructor(private mainService: MainService,
              private router: Router) { }

  ngOnInit(): void {
    this.mainService.getClientes(false)
      .subscribe(clientes => this.clientes = clientes)  
  }

  // irRenovar(){
  //   this.router.navigateByUrl(`/main/renovar/${this.clientes._id}`)
  // }

}
