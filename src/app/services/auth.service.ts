import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/login'; // URL del backend
  private empleadosUrl = 'http://localhost:3000/api'; // URL del backend

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión
  login(credentials: { usuario: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }



  // Método para iniciar sesión
  getEmpleados(): Observable<any[]> {
    const token = localStorage.getItem('token'); // Obtener el token desde localStorage
    if (!token) {
      throw new Error('No token found');
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(this.empleadosUrl+'/empleados', { headers });
  }

}

