import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials = {
    usuario: '',
    password: ''
  };

  errorMessage = '';

  constructor(private AuthService: AuthService) {}

  onSubmit() {
    this.AuthService.login(this.credentials).subscribe(
      (response) => {
        console.log('Token recibido:', response.token);
        alert('Login exitoso. Token: ' + response.token);
        // Aquí puedes redirigir a otra página o guardar el token en localStorage
        localStorage.setItem('token', response.token);
      },
      (error) => {
        console.error(error);
        this.errorMessage =
          error.error.message || 'Error al intentar iniciar sesión.';
      }
    );
  }
}
