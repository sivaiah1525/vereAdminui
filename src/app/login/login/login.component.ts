import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {


    this.loginform = this.fb.group({
      email: [''],
      password: [''],
      checkbox : ['']
    })
  }

  savedata(data) {
    console.log(data.value)
    this.router.navigate(['Dasboard'])
  }

}
