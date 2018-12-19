import { Injectable } from '@angular/core';
import { ToDo } from './to-do';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  lastId:number=0;
  todos:ToDo[]=[];
  constructor() {

   }
   addToDo(todo:ToDo):TodoDataService{
     if(!todo.id){
       todo.id=++this.lastId;
     }
     this.todos.push(todo);
     return this;
   }
   deleteToDoById(id:number):TodoDataService{
     this.todos=this.todos.filter(todo => todo.id!==id);
     return this;
   }
   updateTodoById(id:number,values:object={}):ToDo{
    let todo=this.getToDoById(id);
    if(!todo){
      return null;
    }
    Object.assign(todo,values);
    return todo;
   }
   getAllTodos():ToDo[]{
     return this.todos;
   }
   getToDoById(id:number):ToDo{
     return this.todos.filter(todo => todo.id===id).pop();
   }
   toggleTodoComplete(todo:ToDo){
     let updatedTodo=this.updateTodoById(todo.id,{
       complete:!todo.complete
     });
     return updatedTodo;
   }
}

