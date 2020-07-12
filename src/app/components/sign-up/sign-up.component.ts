import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import{User} from 'src/app/interfaces/user.interface';
import { from } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  constructor(private as:AuthService, private us:UserService,private router:Router) { }
errorMessage:string;
  ngOnInit(): void {
  }
  signup(form)
  {
    let data:User = form.value
    this.as.signUp(data.email,data.password)
    .then(result => {
      this.errorMessage=''
      this.us.AddNewUser(result.user.uid,data.name,data.adress)
      //.then(() => {
        //this.router.navigate(['/'])
      //}) 
    })
     
    .catch(err => 
      this.errorMessage = err.message
      )
  }

}
