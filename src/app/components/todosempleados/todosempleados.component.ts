import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-todosempleados',
  templateUrl: './todosempleados.component.html',
  styleUrl: './todosempleados.component.css'
})
export class TodosempleadosComponent {
  empleados: any[] = [];
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getEmpleados();
  }

  // Obtener empleados
  getEmpleados(): void {
    this.authService.getEmpleados().subscribe(
      (data) => {
        this.empleados = data; // Asumimos que la respuesta es un arreglo de empleados
      },
      (error) => {
        this.errorMessage = 'Error al obtener la lista de empleados';
        console.error(error);
      }
    );
  }
}
