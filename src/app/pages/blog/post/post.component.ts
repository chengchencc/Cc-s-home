import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { posts, Post } from '../blog-data';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post:Post;
  constructor(  private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.post = this.getPost(Number(params.get("id")));
    });
  }

  getPost(id:number){
   return posts.find((value)=>{
      return id == value.id;
    })
  }

}
