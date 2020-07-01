import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userSevice: UserService,
    private router: Router
  ) {

    let registerControls = {
      firstname: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[A-Za-z .'-]+")
      ]),
      lastname: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[A-Za-z .'-]+")
      ]),
      phone: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern("[2-9][0-9]+")
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ])
    }

    this.registerForm = fb.group(registerControls);
  }

  ngOnInit(): void {
  }

  get myfirstname() { return this.registerForm.get('firstname'); }


  registerUser() {

    let data = this.registerForm.value;

    let user = new User(
      null,
      data.firstname,
      data.lastname,
      data.phone,
      data.email,
      data.password
    );

    this.userSevice.registerUser(user).subscribe(
      res => {
        this.router.navigateByUrl('/login')
      },
      err => {
        console.log(err);
      }

    )

  }
}
