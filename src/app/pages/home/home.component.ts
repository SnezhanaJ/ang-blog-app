import { Component } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  postArray: any[]=[];
  latestPosts: any[]=[];

  constructor(private postService: PostsService){

    this.postService.getData(4).subscribe(value=>{
      this.postArray = value;
    });
    
    this.postService.getLatest().subscribe(value => {
      this.latestPosts = value;
    })
  }

}
