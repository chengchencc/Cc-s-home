import { Component, OnInit } from '@angular/core';

import { posts, Post } from "./blog-data";


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts:Post[] = posts;
  constructor() { }

  ngOnInit() {
  }

  openPost(item:Post){
    window.open("./#/post/"+item.id);
  }

}
