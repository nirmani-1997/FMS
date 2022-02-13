import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  hide: boolean = false;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(){
  }

  signupForm : FormGroup = this.fb.group( {

    name:[''],
    address:[''],
    contactNo:[''],
    nic:[''],
    email: ['',[Validators.required,Validators.email]],
    dateOfBirth:[''],
    password: ['',[Validators.required,Validators.minLength(6)]],
    confirmPassword:['']
  })

  onSignup(){
    if (!this.signupForm.valid){
      return;
    }
    console.log(this.signupForm.value)

    // alert('Submit ')
  }

}
