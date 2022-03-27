import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective, NgForm, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  gender:string[]=['Male','Female']
empForm !:FormGroup
  constructor(private formbilder:FormBuilder) { }

  ngOnInit(): void {
    this.empForm=this.formbilder.group({
      name:['',Validators.required],
      empId:['',Validators.required],
      role:['',Validators.required],
      doj:['',Validators.required],
      gender:['',Validators.required],
      email:['',Validators.required]

    })
    
  }
  add(){ console.log(this.empForm.value)}

  

}
