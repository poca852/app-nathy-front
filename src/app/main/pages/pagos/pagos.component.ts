import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Credito } from '../../interfaces/main.interface';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  
  miFormulario: FormGroup = this.fb.group({
    pago: [, Validators.required]
  })
  
  credito!: Credito;

  fecha_actual: Date = new Date();

  cuotas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]


  constructor(private fb: FormBuilder,
              private activatedRoutes: ActivatedRoute,
              private mainService: MainService,
              private router: Router) { 
                
              }

  ngOnInit(): void {
    
    this.activatedRoutes.params
      .pipe(
        switchMap(({id}) => this.mainService.getCredito(id))
      )
      .subscribe(credito => this.credito = credito)

  }
    
  guardar(){
    if(this.miFormulario.invalid){
      return;
    }
    const {pago} = this.miFormulario.value;
    this.mainService.postPago(this.credito._id, pago)
      .subscribe(ok => {
        if(ok === true){
          Swal.fire('Exito', 'Pago Realizado correctamente', 'success')
          this.router.navigateByUrl('/main')
        }else{
          Swal.fire('Error', ok, 'error')
        }
      })

  }

  vCuota(cuotas: number){
    return Number(this.credito?.valor_cuota * cuotas)
  }

}
