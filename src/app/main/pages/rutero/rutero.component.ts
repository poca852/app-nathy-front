import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credito } from '../../interfaces/main.interface';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-rutero',
  templateUrl: './rutero.component.html',
  styleUrls: ['./rutero.component.css']
})
export class RuteroComponent implements OnInit {

  creditos: Credito[] = []

  fecha_today: Date = new Date();

  constructor(private mainService: MainService,
              private router: Router) { }

  ngOnInit(): void {
    this.mainService.getCreditos('true')
      .subscribe(creditos => this.creditos = creditos)  
  }

  irAPagos(id:string){
    this.router.navigateByUrl(`/main/pagos/${id}`)
    // console.log(id);
  }

}
