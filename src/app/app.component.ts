import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as Catalog from './config/catalog.json';
import { Producto } from './model/product';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit {

  title = 'Workspace Mario';

  ngOnInit(): void {
    console.log('Componente AppComponent cargado')
  }
 
  addToCart(){
    console.log("Aniadiendo producto a carro de compras");
  }
  
  
  getProducts(){
    return (Catalog as any).Item;
  }


}


