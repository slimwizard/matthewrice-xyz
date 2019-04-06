import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogService, BlogPost } from './blog-service/blog.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogComponent implements OnInit {

  blogs: BlogPost[]
  blogSelected: boolean
  selectedBlog: BlogPost

  constructor(private blogService: BlogService) { }

  selectBlog(title: string): void {
    this.selectedBlog = this.blogService.getBlog(title)
    this.blogSelected = true
    window.scroll(0,0);
  }

  ngOnInit() {
    this.blogs = this.blogService.getBlogs()
  }

  }
