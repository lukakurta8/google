import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [FormsModule,CommonModule,NgIf],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchTerm = '';
  loading = true;

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    this.emailService.getUsers().subscribe({
      next: (data) => {
        const sorted = data.sort(
          (a, b) => Number(b.id) - Number(a.id)
        );

        this.users = sorted;
        this.filteredUsers = sorted;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  filterUsers() {
    const term = this.searchTerm.toLowerCase();

    this.filteredUsers = this.users.filter(user =>
      user.email.toLowerCase().includes(term)
    );
  }
}
