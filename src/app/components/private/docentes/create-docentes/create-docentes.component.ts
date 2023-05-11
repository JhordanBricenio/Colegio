import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-create-docentes',
  templateUrl: './create-docentes.component.html',
  styleUrls: ['./create-docentes.component.css']
})
export class CreateDocentesComponent implements OnInit {
  value = '';

  emailFormControl = new FormControl('', [Validators.required, Validators.email,]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.required,]);

  matcher = new MyErrorStateMatcher();

  docente: User;
  constructor() {
    this.docente = new User();
  }


  ngOnInit(): void {

  }


}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}