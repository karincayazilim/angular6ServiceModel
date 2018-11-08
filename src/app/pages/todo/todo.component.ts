import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo/todo.service';
import {Todo} from '../../models/todo/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [ TodoService]
})
export class TodoComponent implements OnInit {
  public list: Todo[] = [];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((response: Todo[]) => {
      this.list = response;
    }, (error) => {
      alert(JSON.stringify(error));
    });
  }

}
