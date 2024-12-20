import { Component, computed, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties',
  standalone: false,
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css',
})
export class PropertiesComponent {

  public user = signal<User>({
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg"
  });

  public fullName = computed( () => {
    `${this.user().first_name} ${this.user().last_name}`
  })

  //Con el keyof nos aseguramos que la llave que nos llega sea una que se encuentra en la interface "User" de lo contrario si lo manejamos como "field: string" nos pueden enviar campos que no existen en la interfaz y este los agreaga sin problema al objeto
  onFieldUpdated( field: keyof User, value: string ){
    console.log({field, value});

    //Esta es una forma de hacerlo con el spread que son los 3 puntos "..." con estos solo actualizamos el campo que llega como "field" con el keyof
    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // })

    //Otra fomra de hacerlo con el update
    // this.user.update( current => ({
    //   ...current,
    //   [field]: value
    // }) );


    //De esta manera se agrega un poco de seguiridad para no ir a dañar el objeto de la interfaz
    this.user.update( current => {
      switch( field ){

          case 'email':
            current.email = value;
            break;

          case 'first_name':
            current.first_name = value
            break;

          case 'last_name':
            current.last_name = value
            break;

          case 'avatar':
            current.avatar = value
      }
      return current;


    })

  };
}
