import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-index-docentes',
  templateUrl: './index-docentes.component.html',
  styleUrls: ['./index-docentes.component.css']
})
export class IndexDocentesComponent {

  public users:User[] = [];

  constructor(private serviceDocentes:UserService) { }

  ngOnInit(): void {
    this.serviceDocentes.getUsers().subscribe(
      users => this.users = users
    );

    
  }

}
