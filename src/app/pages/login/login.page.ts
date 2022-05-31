import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserDTO } from 'src/app/model/user-dto';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  mioForm;
 email:string;
 password:string;
  constructor(private fb: FormBuilder, private loginservice: LoginService) {
    this.mioForm = this.fb.group ({
      uname: ['', Validators.required],
      passw: ['', Validators.required],
    })
    
   }

  ngOnInit() {  }
  login() {
    console.log(this.loginservice.login(this.mioForm.get('email').value, this.mioForm.get('password').value).subscribe(response => {
      const user: UserDTO= response;
      console.log(user)
    }));
  }


}
