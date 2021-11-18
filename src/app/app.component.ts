import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import EmployeesJson from './config/catalog.json';
//import { Producto } from './model/product';

interface Producto {
  id: string;
  name: string;
  price: number;
  count: number;
  type: string;
  subType: string;
  image: string
}

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent  implements OnInit {

  title = 'Workspace Mario';

  ListaProductos:Producto[] = EmployeesJson;   
                                              

  constructor() {
    console.log(this.ListaProductos);

  }

  ngOnInit(): void {
    console.log('Componente AppComponent cargado');
    console.log(this.ListaProductos);
  }
 
  addToCart(){
    console.log("Aniadiendo producto a carro de compras");
  }
}


