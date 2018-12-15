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
     
   }
}
