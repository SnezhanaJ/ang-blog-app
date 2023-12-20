import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { CommonModule } from '@angular/common';
import { Firestore, collection, collectionData, query, where } from '@angular/fire/firestore';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.css'
})
export class CommentListComponent implements OnChanges, OnInit {
  @Input() comments: any[]=[];

  commentArray: any[]=[];
  constructor(){
   
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    //console.log('Changes:', changes);
   // console.log('comments',this.comments);
    this.commentArray=this.comments;
    console.log('CommentsArray', this.commentArray);
    if(changes['postId'] && ! changes['postId'].firstChange){
      // this.commentService.getComments(this.postId).subscribe(value=>{
      //   this.commentArray=value;
      //   //console.log(value);
      //   console.log(this.commentArray);
      // });

    
    }
    
  }


}
