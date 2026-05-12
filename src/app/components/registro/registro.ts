import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
 public activeLogin:boolean = true;

 //Formulario de Login

 loginForm = new FormGroup({
  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required,Validators.minLength(8)])
 });

 //Formulario de Registro

 registroForm = new FormGroup({
  name: new FormControl('',[Validators.required,Validators.minLength(8)]),
  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required,Validators.minLength(8)])
 });
//Método para cambiar entre Login y Registro

onLogin(){
  if (this.loginForm.valid) {
    console.log('Login exitoso', this.loginForm.value);
    this.loginForm.reset();
  } else {
      alert('Por favor revisa los datos del  login ');
  }
}
  onRegistro(){
    if (this.registroForm.valid) {
      console.log('Registro exitoso', this.registroForm.value);
      this.registroForm.reset();
    } else {
        alert('Por favor revisa los datos del registro');
    }
  }
}
