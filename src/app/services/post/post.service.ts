import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Post} from '../../models/post/post.model';

@Injectable()
export class PostService {
  constructor(private httpClient: HttpClient) {
  }

  getPosts() {
    return this.httpClient.get<Post[]>(`${environment.ApiURL}posts`);
  }
  getPostById(id: number) {
    return this.httpClient.get<Post>(`${environment.ApiURL}posts/` + id);
  }
  save(post: Post) {
    if ( post.id > 0 ) {
      return this.httpClient.put(`${environment.ApiURL}posts/` + post.id, post);
    } else {
      return this.httpClient.post(`${environment.ApiURL}posts` , post);
    }
  }
}
