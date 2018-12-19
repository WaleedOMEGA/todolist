import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { ToDo } from './to-do';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TodoDataService]
})
export class AppComponent {
  newTodo: ToDo = new ToDo();
  constructor(private todoDataService:TodoDataService){
  }
  addTodo() {
    this.todoDataService.addToDo(this.newTodo);
    this.newTodo = new ToDo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteToDoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}
