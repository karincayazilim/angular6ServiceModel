import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post/post.service';
import {Post} from '../../models/post/post.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ PostService]
})
export class PostComponent implements OnInit {
  list: Post[] = [];
  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((response: Post[]) => {
      this.list = response;
    }, (error) => {
      alert(JSON.stringify(error));
    });
  }
  add() {
    this.router.navigate(['posts/add']);
  }

}
