import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//se agregan los metodos para que direccionen a las otras paginas
  title = 'Proyecto';

  constructor(private router:Router){}


    Listar(){
      this.router.navigate(["listar"]);//el nombre tiene que ser el mismo que esta en app-routing.module.ts haciendo referencia al componente listar
    }

    Nuevo(){

      this.router.navigate(["add"]);
    }
  

}
