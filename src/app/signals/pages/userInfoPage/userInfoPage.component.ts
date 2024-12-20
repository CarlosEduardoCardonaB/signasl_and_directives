import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { UserServiceService } from '../../services/userService.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-user-info-page',
  standalone: false,
  templateUrl: './userInfoPage.component.html',
  styleUrl: './userInfoPage.component.css',
})
export class UserInfoPageComponent implements OnInit {


  private userService = inject(UserServiceService);

  public userId = signal(0);

  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(false);
  public fullName = computed<string>( () => {
      if( !this.currentUser() ) return 'usuario no encontrado'

      return `${this.currentUser()?.first_name } ${this.currentUser()?.last_name}`
  })


  ngOnInit(): void {
    //this.loadUser( this.userId() );
  }

  loadUser(id: number){
      if( id<= 0 )return

      this.userId.set(id);
      //Aqui solo reiniciamos el currentUser para dar experiencia visual de que se cambia de uno a otro
      this.currentUser.set(undefined);

      this.userService.getUserById(id)
        // .subscribe( user => {
        //   //console.log({user});
        //   this.currentUser.set(user);

        // })
        .subscribe({
          next: (user) => {
            this.currentUser.set(user);
            this.userWasFound.set(true);
          },
          error: () => this.userWasFound.set(false),
        })
  }

 }
