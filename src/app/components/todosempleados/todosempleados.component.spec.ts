import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosempleadosComponent } from './todosempleados.component';

describe('TodosempleadosComponent', () => {
  let component: TodosempleadosComponent;
  let fixture: ComponentFixture<TodosempleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodosempleadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodosempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
