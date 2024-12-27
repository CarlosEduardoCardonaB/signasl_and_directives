import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties',
  standalone: false,
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css',
})
export class PropertiesComponent {

  public counter = signal(10);

  public user = signal<User>({
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg"
  });

  // public fullName = computed( () => {
  //   return `${this.user().first_name} ${this.user().last_name}`;
  //   });

  //Este funciona igual que el anterior, pero sin el return por lo que no usamos {}
  public fullName = computed( () =>
    `${this.user().first_name} ${this.user().last_name}`
  );

  //Este dispara un efecto o alguna acción cuando una o varias señales cambian
  public userChangedEffect = effect( () => {
    //console.log('se disparó el effect')
    //con la siguiente línea indicamos que cada vez que la signal "this.user()" cambia, entonces se dispara este effect e imprime el first_name por consola
    //Este effect se limpia solo y no necesita el ngOnDestroy para ser limpiado manualmente
    //console.log(this.user().first_name);

    //Ejemplo de counter para demostración de auto limpieza
    console.log(`${this.user().first_name} - ${this.counter()}`)
  });

  // Este boton es para probar que cuando volvemos a entrar al componente el contador se inicia desde cero, o sea que se limpia solo el signal
  increaseBy( value: number ){
    this.counter.update( () => this.counter() + value )
  }


  //Con el keyof nos aseguramos que la llave que nos llega sea una que se encuentra en la interface "User" de lo contrario si lo manejamos como "field: string" nos pueden enviar campos que no existen en la interfaz y este los agreaga sin problema al objeto
  onFieldUpdated( field: keyof User, value: string ){
    //console.log({field, value});

    //Esta es una forma de hacerlo con el spread que son los 3 puntos "..." con estos solo actualizamos el campo que llega como "field" con el keyof
    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // });

    //Otra fomra de hacerlo con el update
    // this.user.update( current => ({
    //   ...current,
    //   [field]: value
    // }) );


    //De esta manera se agrega un poco de seguiridad para no ir a dañar el objeto de la interfaz
    // this.user.update( (current) => {

    //   switch( field ){

    //       case 'email':
    //         current.email = value;
    //           break;

    //       case 'first_name':
    //         current.first_name = value
    //           break;

    //       case 'last_name':
    //         current.last_name = value
    //           break;

    //       case 'avatar':
    //         current.avatar = value
    //           break
    //   }
    //   return current;
    // });


    //Apunte de un estudiante del por que no sirve el switch anterior:
    // Solo una aclaración, en el método onFieldUpdated usando el Switch final, no recalcula el FullName,
    // porque estamos modificando directamente el current Value, mobx-state-tree (MST)
    // no detecta el cambio cuando actualizamos directamente las propiedades del objeto observable.
    // Lo que deberíamos hacer es retornar un nuevo objeto con los valores modificados.

    this.user.update((current) => {

      var newUser = {...current};
      switch(field){
        case 'email':
          newUser.email = value;
          break;
        case 'first_name':
          newUser.first_name = value;
          break;
        case 'last_name':
          newUser.last_name = value;
          break;
        case 'avatar':
          newUser.avatar = value
           break
      }
      return newUser;
    });


  };
}
