import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentService } from '../../services/comment.service';

export interface Comment {
  commentName: string,
  comment:string
  createdAt: Date,
  dateString: string,
  postId:string,
}

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css'
})
export class CommentFormComponent implements OnChanges {
  commentForm!: FormGroup;
  @Input() postId!: string;
  constructor(private commentService: CommentService, private fb:FormBuilder ){
    this.initForm();
  }

  private initForm(): void{
    this.commentForm=this.fb.group({
      commentName: ['', Validators.required],
      comment: ['', Validators.required],
      postId: [this.postId],
    });

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['postId'] && ! changes['postId'].firstChange){
      this.commentForm.patchValue({postId:this.postId});
    }
  }



  onSubmit(){
    const dateNow = new Date();
    
    const commentData: Comment = {
      commentName: this.commentForm.value.commentName,
      comment: this.commentForm.value.comment,
      createdAt: dateNow,
      dateString: dateNow.toDateString(),
      postId: this.postId,

    }
   // console.log(this.postId);
    //console.log(commentData)
    this.commentService.saveData(commentData);
    this.commentForm.reset();
  }
}
