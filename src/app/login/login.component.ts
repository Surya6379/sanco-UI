import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl,ValidationErrors,ValidatorFn  } from '@angular/forms';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      userName:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

}
