import { Component } from '@angular/core';
import { EmailService } from '../services/email';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password',
  imports: [FormsModule],
  templateUrl: './password.html',
  styleUrl: './password.css',
})
export class Password {
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

    password = '';
 

  constructor(
    private emailService: EmailService,
    private router: Router
  ) {}



  saveUser() {
    const email = localStorage.getItem('pendingEmail');

    if (!email || !this.password) {
      alert('Missing email or password');
      return;
    }

    this.emailService.createUser(email, this.password).subscribe({
      next: () => {
        localStorage.removeItem('pendingEmail');
        console.log('User saved successfully');
        this.router.navigate(['/success']);
      },
      error: (err) => {
        console.error('Failed to save user', err);
      }
    });
  }
}
