import { Component , OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl:'./signin.component.html'
})

export class SignInComponent{
  myForm : FormGroup;

  onSubmit(){
    console.log(this.myForm);
    this.myForm.reset();
  }

  ngOnInit(){
    this.myForm = new FormGroup({
      email : new FormControl(null, [
        Validators.required,
        Validators.pattern("A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}")
      ]),
      password : new FormControl(null, Validators.required)
    });
  }
}
