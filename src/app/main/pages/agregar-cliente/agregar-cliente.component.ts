import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../../services/main.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    dpi : ['', Validators.required],
    nombre : ['', Validators.required],
    alias : ['', Validators.required],
    ciudad : ['', Validators.required],
    celular : ['', Validators.required],
    direccion : ['', Validators.required],
  })

  constructor(private fb: FormBuilder,
              private mainService: MainService,
              private router: Router) { }

  ngOnInit(): void {
  }

  guardar(){
    this.mainService.postCliente(this.miFormulario.value)
      .subscribe(ok => {
        if(ok === true){
          Swal.fire('Existo', 'cliente creado correctamente', 'success')
          this.router.navigateByUrl('/main/renovaciones')
        }else{
          Swal.fire('Error', ok, 'error')
        }
      })
  }

}
