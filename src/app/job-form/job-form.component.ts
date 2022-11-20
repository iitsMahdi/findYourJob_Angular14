import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Category } from '../model/category';
import { Location } from '../model/location';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit{
  locations:Location[];
  categories:Category[];
  locSelected:1;
  jobDetails1!: FormGroup;
  jobDetails2!: FormGroup;
  jobDetails3!: FormGroup;
  personal_step = false;
  address_step = false;
  education_step = false;
  step = 1;

  constructor(private formBuilder: FormBuilder,private router:Router) {
  }
  handler:any = null;
  ngOnInit(): void {
    this.locations=[
      {id:1,nom:"tunis"},{id:2,nom:"Germany"},{id:3,nom:"USA"}
    ]
    this.categories=[
      {id:1,libelle:"Web Developer"},{id:2,libelle:"Software ingeneering"},{id:3,libelle:"Nurse"}
    ]
    this.jobDetails1 = this.formBuilder.group({
      location: [null, Validators.required],

  });

  this.jobDetails2 = this.formBuilder.group({
      Title: ['', Validators.required],
      category: ['', Validators.required],
  });

  this.jobDetails3 = this.formBuilder.group({
     salary: ['', Validators.required],
      desc: ['', Validators.required]
  });
  this.loadStripe();
  }

  get personal() { return this.jobDetails1.controls; }

  get address() { return this.jobDetails2.controls; }

  get education() { return this.jobDetails3.controls; }

  next(){

    if(this.step==1){
          this.personal_step = true;
          if (this.jobDetails1.invalid) {
            return
          }
          this.step++
    }

    else if(this.step==2){
        this.address_step = true;
        if (this.jobDetails2.invalid) {
          return
        }
        this.step++;
    }
  }

  previous(){
    this.step--

    if(this.step==1){
      this.address_step = false;
    }
    if(this.step==2){
      this.education_step = false;
    }

  }
  pay(amount: any) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51M3mJJJXlzFPH9CjGuzsZ3FxtHBXxcw2aB1bL97HeAGZ7yIRGnlOu2JWGTpmh36OvX5jdSTlXgSid9BvsLDDvsf900kCSCQoza',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Job Added Successfully',
          showConfirmButton: false,
          timer: 1500
        })
        //this.router.navigateByUrl('/login');
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });

  }

  loadStripe() {

    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51M3mJJJXlzFPH9CjGuzsZ3FxtHBXxcw2aB1bL97HeAGZ7yIRGnlOu2JWGTpmh36OvX5jdSTlXgSid9BvsLDDvsf900kCSCQoza',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }

      window.document.body.appendChild(s);
    }
  }
  selecteditem1:string='';
  selectChangeHandler1(event : any){
    this.selecteditem1=event.target.value;
  }

  selecteditem2:string='';
  selectChangeHandler2(event : any){
    this.selecteditem2=event.target.value;
  }

onSubmit(){
  alert(this.selecteditem1+"\n"+this.jobDetails2.value.Title+"\n"+this.selecteditem2+"\n"+this.jobDetails3.value.salary+"\n"+this.jobDetails3.value.desc)
}

}
