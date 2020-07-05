import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import{User} from 'src/app/interfaces/user.interface';
import { from } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  constructor(private as:AuthService) { }

  ngOnInit(): void {
  }
  signup(form)
  {
    let data:User = form.value
    this.as.signUp(data.email,data.password)
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

}
