import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { __values } from 'tslib';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  users:Array<User>=[];
  userData: FormGroup;

  constructor(private fb:FormBuilder) {

    this.userData=fb.group({
      nombre:new FormControl('',[Validators.required]),
      apellidos:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      genero:new FormControl('',[Validators.required]),
    });
   }

  ngOnInit(): void {
  }

  addUser(){
    
    this.users.push(
      {
        Id:this.users.length+1,
        Nombre: this.userData.get('nombre')?.value,
        Apellidos:this.userData.get('apellidos')?.value,
        Email:this.userData.get('email')?.value,
        Genero:this.userData.get('genero')?.value,
      }
    );
    this.userData.reset();
  }

}
