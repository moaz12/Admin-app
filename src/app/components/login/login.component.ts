import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
signIn(form)
{
  let data:User = form.value
 return this.auth.login(data.email,data.password)
  .then(result => {console.log('result'+result)})
  .catch(err => {console.log('error'+err)})
}
}
