import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Location } from '../model/location';

@Component({
  selector: 'app-signup-comp',
  templateUrl: './signup-comp.component.html',
  styleUrls: ['./signup-comp.component.css']
})
export class SignupCompComponent implements OnInit {
companyForm!:FormGroup;
locations:Location[];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.locations=[
      {id:1,nom:"tunis"},{id:2,nom:"Germany"},{id:3,nom:"USA"}
    ]

    this.companyForm=this.formBuilder.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      cName:['',Validators.required],
      imgComp:['',Validators.required],
      location:['',Validators.required],
      phone:['',Validators.required],
    });
  }

  get details(){
    return this.companyForm.controls;
  }

  selecteditem1:string='';
  selectChangeHandler1(event : any){
    this.selecteditem1=event.target.value;
  }

  onSubmit(){
    alert(this.companyForm.value.first_name+"\n"+this.companyForm.value.last_name+"\n"+this.companyForm.value.email+"\n"+this.companyForm.value.password+"\n"+this.companyForm.value.cName+"\n"+this.selecteditem1+"\n"+this.companyForm.value.imgComp)
  }

}
