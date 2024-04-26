import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {


  login= new FormControl('',Validators.required)
  pwd= new FormControl('',Validators.required)

  affich(){
    console.log(this.login)
  }

  loginForm= new FormGroup({
    login: new FormControl('',[Validators.required,Validators.minLength(5)]),
    pwd: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    tel: new FormControl('',[Validators.required,Validators.pattern('[0-9]{8}')]),

  })

  test(){
    console.log(this.loginForm)
  }

}
