import { Component, signal } from '@angular/core';

interface MenuItem{
  title: string,
  route: string
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {

   //Items del menu de la forma tradicional
  // public menuItems: MenuItem[]= [
  //   { title: 'Contador', route: 'counter' },
  //   { title: 'Mutaciones', route: 'properties' },
  //   { title: 'Usuario', route: 'user-info' }
  // ]

  //Items del menu con signals. Un signal me modifica todos los lugares donde se usa este valor y actualiza cálculos, o Htmls donde se usa
  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', route: 'counter' },
    { title: 'Mutaciones', route: 'properties' },
    { title: 'Usuario', route: 'user-info' }
  ]);








}
