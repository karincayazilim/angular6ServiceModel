import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Todo} from '../../models/todo/todo.model';

@Injectable()
export class TodoService {
  constructor(private httpClient: HttpClient) {
  }
  getTodos() {
    return this.httpClient.get<Todo[]>(`${environment.ApiURL}todos`);
  }

}
