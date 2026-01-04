import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://695a99d5950475ada4672ef7.mockapi.io/user';

  constructor(private http: HttpClient) {}

  createUser(email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, {
      email,
      password
    });
  }

  
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
