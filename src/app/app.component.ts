import { Component } from '@angular/core';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Workspace Mario';
 
  addToCart(){
    console.log("Aniadiendo producto a carro de compras");
  }

}


