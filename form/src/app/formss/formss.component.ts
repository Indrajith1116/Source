import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DilogComponent } from '../dilog/dilog.component';

@Component({
  selector: 'app-formss',
  templateUrl: './formss.component.html',
  styleUrls: ['./formss.component.css']
})
export class FormssComponent implements OnInit {
  user = {
    firstName: 'John',
    password:  'test'
};

onSubmitTemplateBased() {
    console.log();
}
  constructor(public dialog: MatDialog) { }
  registerForm:any;
  openDialog() {
    this.dialog.open(DilogComponent)
  }


  ngOnInit(): void {
    
  }
  onee(){
    this.registerForm=new FormGroup({
      "firstname":new FormControl(null,[Validators.required,Validators.pattern('[ a-zA-Z]*')]),
      "lastname":new FormControl(null,[Validators.required,Validators.pattern('[ a-zA-Z]*')]),
      "username":new FormControl(null,[Validators.required,Validators.pattern('[ a-zA-Z]*')]),
      "email":new FormControl(null,[Validators.required,Validators.email]),
      "number":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "password":new FormControl(null,[Validators.required,Validators.pattern('[0-9a-zA-Z @$]*')])

    })

  }
submitdata(){
  
  console.log(this.registerForm.value)
  if(this.registerForm.valid){
   this.openDialog()
    
    this.registerForm.reset();
  }
  
  
 
  
}
get firstname(){
  return this.registerForm.get("firstname"); 
}
get lastname(){
  return this.registerForm.get("lastname"); 
}
get username(){
  return this.registerForm.get("username");
}
get email(){
  return this.registerForm.get("email"); 
}
get number(){
  return this.registerForm.get("number");
}
get password(){
  return this.registerForm.get("password");
}
}
