import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.scss']
})
export class MiComponenteComponent implements OnInit {

  edad: number;
  nombres:Array<string>;


  constructor() {
    this.edad = 19;
    this.nombres=['Mario','Elizabeth','Samara','Sarahí'];
   }

  ngOnInit(): void {
    alert('Componente mi-componente cargado')
  }

  aumentarEdad(){
    this.edad = this.edad +1;
    alert("Aumentando edad")
  }

  disminuirEdad(){
    this.edad--;
    alert("Disminuyendo edad")
  }

}
