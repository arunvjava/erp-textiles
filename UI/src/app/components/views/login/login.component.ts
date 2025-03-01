import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userService: UserService) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });


  // Handle form submission
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted:', this.loginForm.value);
      let user: User = {};
      user.emailId = 'arun@gmail.com';
      user.password = 'arun';
      this.userService.validateUser(user).subscribe(
        (resp) => {
          console.log(resp);
          if(resp.respObj == true) {
            console.log('Success');
          }
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
  
  // Clear the form fields
  clearForm() {
    this.loginForm.reset();
  }

}
