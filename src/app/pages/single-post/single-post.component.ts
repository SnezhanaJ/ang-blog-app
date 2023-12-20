import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { CommentFormComponent } from '../../comments/comment-form/comment-form.component';
import { CommentListComponent } from '../../comments/comment-list/comment-list.component';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CommentService } from '../../services/comment.service';
@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [PostCardComponent, CommentFormComponent, CommentListComponent, CommonModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent implements OnInit{

  postData: any;
  similarPosts: any[]=[];
  postId: any;
  comments: any[]=[];

  constructor(private route:ActivatedRoute, private postService: PostsService, private commentService: CommentService){

    this.route.params.subscribe(val=>{
      this.postId=val['id'];
      console.log(this.postId);
    });
     this.loadComments();
  
  }
  ngOnInit(): void {
    this.route.params.subscribe(val=>{
      this.postService.loadOnePost(val['id']).subscribe(value=>{
       // console.log(value);
        this.postData=value;

        this.loadSimilarPost(this.postData.category.id);
      })
    });
  }

  loadSimilarPost(catId: any){
    this.postService.loadSimilar(catId, 4).subscribe(val=>{
      this.similarPosts=val;
    })
  }

  loadComments(): void {
    this.commentService.getComments(this.postId).subscribe(comments => {
      this.comments = comments;
      //console.log('Comments:', this.comments); 
     });
   }
}
