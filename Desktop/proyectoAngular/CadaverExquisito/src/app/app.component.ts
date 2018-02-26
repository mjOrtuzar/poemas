import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//crear nuevo componente
export class AppComponent {
  title = 'Cadaver Exquisito';
  poemas = [
    true,
    true
  ];
  onPoemMostrar(input){
    this.poemas[input.id] = input.mostrar;
  }
}
