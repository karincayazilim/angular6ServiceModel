import { Component, OnInit } from '@angular/core';
import {Post} from '../../../models/post/post.model';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../../services/post/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public post: Post = new Post();
  constructor(private activatedRoute: ActivatedRoute,
              private  postService: PostService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      if ( params['id'] != null && parseInt(params['id'], 10) > 0) {
        this.getPostById( parseInt(params['id'], 10));
      }
    });
  }
  getPostById(id: number) {
    this.postService.getPostById(id).subscribe((response: Post) => {
      this.post = response;
    }, (error) => {
      alert(JSON.stringify(error));
    });
  }
  save() {
    this.postService.save(this.post).subscribe((response) => {
      alert(JSON.stringify(response));
    }, (error) => {
      alert(JSON.stringify(error));
    });
  }

}
