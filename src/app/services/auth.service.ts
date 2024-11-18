import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/login'; // URL del backend

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión
  login(credentials: { usuario: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }
}

