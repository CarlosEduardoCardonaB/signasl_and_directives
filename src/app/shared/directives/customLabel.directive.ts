import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

private htmlElement?: ElementRef<HTMLElement>;
private _color: string = 'red';
private _errors?: ValidationErrors | null;

//Este set debe colocar en una directiva por lo que quiero modificar el valor que tiene esta directiva, por esto tenemos que colocar el set
@Input() set color(value:string ){
  //console.log({color: value});
  this._color = value;
  this.setStyle();
}

@Input() set errors( value: ValidationErrors | null | undefined){
  this._errors = value;
  //console.log({errors: value});
  this.setErrorMessage();
}

constructor( private element: ElementRef<HTMLElement>){

  console.log(element);
  this.htmlElement = element;
  //this.htmlElement.nativeElement.innerHTML = 'hola mundo';
}
  ngOnInit(): void {
    //console.log('Directiva onInit')
    this.setStyle();
  }


  setStyle():void {

    if( !this.htmlElement ) return;

    this.htmlElement!.nativeElement.style.color = this._color;
    //console.log(this._color);
  }

  setErrorMessage(){
    if( !this.htmlElement ) return;
    if( !this._errors ){
      this.htmlElement.nativeElement.innerText = 'Sin errores';
      return;
    }

    const errors = Object.keys(this._errors);
    console.log(errors)
    if(errors.includes('required')){
      this.htmlElement.nativeElement.innerText = 'Campo requerido';
      return;
    }

    if(errors.includes('minlength')){
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];
      this.htmlElement.nativeElement.innerText = `Longitud requerida: ${min}, Por ahora solo tienes: ${current}`;

      return;
    }

    if(errors.includes('email')){
      this.htmlElement.nativeElement.innerText = 'No cumple con la estructura de correo';
      return;
    }

  }


}
