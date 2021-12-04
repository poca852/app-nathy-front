import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../services/auth.service';
import { UsuarioValidatorService } from 'src/app/shared/services/usuario-validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    usuario: ['' , [Validators.required], [this.eV]],
    password: ['' , Validators.required]
  })

  get UserErrorMsg(): string{
    const errors = this.miFormulario.get('usuario')?.errors;

    if(errors?.required){
      return `Ingresa un Usuario`
    } else if(errors?.noExisteUsuario){
      return `El usuario ${this.miFormulario.get('usuario')?.value} no existe`
    }

    return '';
  }

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private eV: UsuarioValidatorService) { }

  ngOnInit(): void {
  }

  campoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid &&
           this.miFormulario.get(campo)?.touched
  }

  login(){

    const {usuario, password} = this.miFormulario.value;

    this.authService.login(usuario, password)
      .subscribe(ok => {
        if(ok === true){
          this.router.navigateByUrl('/main')
        }else{
          Swal.fire('Error', ok, 'error')
        }
      })
    
  }

}
