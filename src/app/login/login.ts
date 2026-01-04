import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from '../services/email';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
   styleUrls: ['./login.css']
})
export class Login {
   email = '';
  showError = false;

  constructor(
    private router: Router
  ) {}

  saveEmail() {
    this.showError = true;

    if (!this.isValidEmail(this.email)) {
      return;
    }

    localStorage.setItem('pendingEmail', this.email);
    this.router.navigate(['/Login']);
  }

  isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

}
