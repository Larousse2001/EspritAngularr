import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  color!:string

  title:string='welcome 1ALINFO7'

  listUsers:any[] = [{
    name: 'John',
    age: 25,
    email:"John.yazidi@esprit.tn",
    etat:true
  },{
    name: 'Jane',
    age: 24,
    email:"Jane.yazidi@esprit.tn",
    etat:false

  },{
    name: 'Jim',
    age: 26,
    email:"Jim.yazidi@esprit.tn",
    etat:true
  }]

  affich(){
    alert('bonjour')
  }
}
