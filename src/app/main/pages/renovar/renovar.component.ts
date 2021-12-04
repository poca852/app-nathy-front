import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MainService } from '../../services/main.service';
import { Cliente } from '../../interfaces/main.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-renovar',
  templateUrl: './renovar.component.html',
  styleUrls: ['./renovar.component.css']
})
export class RenovarComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    prestado: [, [Validators.required]],
    cuotas: [, Validators.required]
  })

  cliente!: Cliente;
  idCliente: string = ''; 

  constructor(private activatedRoute: ActivatedRoute,
              private mainService: MainService,
              private fb: FormBuilder,
              private router: Router) { 
                this.activatedRoute.params
                  .subscribe(({id}) => this.idCliente = id);
              }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.mainService.getCliente(id))
      )
      .subscribe(cliente => this.cliente = cliente)
  }

  guardar(){
    const {prestado, cuotas} = this.miFormulario.value;
    this.mainService.postCredito(prestado, this.idCliente, cuotas)
      .subscribe(ok => {
        if(ok === true){
          Swal.fire('Exito', 'Credito creado', 'success')
          this.router.navigateByUrl('/main/rutero')
        }
      })
  }

}
