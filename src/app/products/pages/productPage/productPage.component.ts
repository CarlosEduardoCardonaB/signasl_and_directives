import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: false,
  //imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './productPage.component.html',
  styleUrl: './productPage.component.css'
})
export class ProductPageComponent {

  //Esta es una forma de inyectar el FormBuilder
  private fb = inject( FormBuilder );
  //Y esta es otra que también funciona igual. Se puede usar cualquiera de las dos que nosotro querramos
  //constructor( private fb: FormBuilder ){}

  public color:string = 'green';

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]]
  });

  changeColor(){
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }


 }
