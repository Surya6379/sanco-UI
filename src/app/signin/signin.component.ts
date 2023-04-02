import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl,ValidationErrors,ValidatorFn  } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm!:FormGroup

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.signinForm = this.formBuilder.group({
      userName:['',[Validators.required]],
      password:['',[Validators.required]],
      role : ['',[Validators.required]],
      email : ['',[Validators.required]],
      mobile : ['',[Validators.required]]
    })
    
  }

}
