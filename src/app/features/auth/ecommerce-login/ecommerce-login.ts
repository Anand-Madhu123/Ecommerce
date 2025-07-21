import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ecommerce-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './ecommerce-login.html',
  styleUrl: './ecommerce-login.scss'
})
export class EcommerceLogin {

   username = '';
  password = '';
  loginFailed = false;

 onSubmit() {
  if (this.username === 'admin' && this.password === 'admin') {
    this.loginFailed = false;
    alert('Login successful!');
  } else {
    this.loginFailed = true;
    const form = document.querySelector('.login-box');
    form?.classList.add('shake');
    setTimeout(() => form?.classList.remove('shake'), 300);
  }
}

}


