import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  standalone: false,
  templateUrl: './counterPage.component.html',
  styleUrl: './counterPage.component.css',
})
export class CounterPageComponent {

  public counter = signal(10);
  //Con el computed() cada que uno de los parámetros internos cambia, este realiza el cálculo de nuevo y actualiza el valor en todos los lugares donde esté implementado
  public squareCounter = computed( () => this.counter() * this.counter() );

  increaseBy( value:number ){
    //Forma anterior de hacerlo
    //this.counter.set( this.counter() +  value );

    //Otra forma de hacerlo es:
    this.counter.update( current => current + value );
  }

 }
