import {Api} from '../api.model';

export class Todo extends Api {
  public userId: number;
  public title: string;
  public completed: boolean;
}
