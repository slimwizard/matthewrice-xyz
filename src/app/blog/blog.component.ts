import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogService } from './blog-service/blog.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogComponent implements OnInit {

  blog

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blog = this.blogService.blogPosts[0]
    
  }

  }
