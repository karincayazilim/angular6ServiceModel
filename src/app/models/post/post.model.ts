import {Api} from '../api.model';

export class Post extends Api {
  public userId: number;
  public title: string;
  public body: string;
}
