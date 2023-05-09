import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-index-aumnos-crud',
  templateUrl: './index-aumnos-crud.component.html',
  styleUrls: ['./index-aumnos-crud.component.css']
})
export class IndexAumnosCrudComponent {

  public users:User[]= [];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      response => {
        this.users = response;
        console.log(this.users);
        
      },
      err => console.log(err)
    )
  }

  delete(alumno){
    
  }


}
