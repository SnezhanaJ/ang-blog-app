import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, query, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor(private afs: Firestore) { }
  saveData(postData: any){
    const collectionInstance = collection(this.afs, 'comments');
    addDoc(collectionInstance, postData).then(ref=>{
      console.log("success");
    })
  }

  getData(){
    const collectionInstance = collection(this.afs, 'comments');
    return collectionData(collectionInstance, {idField: 'id'});
  }

  getComments(postId : any){
    console.log('get comments method:', postId);
    const collectionInstance = collection(this.afs, 'comments');
    const featuredPostsQuery = query(collectionInstance, where('postId', '==', postId));

    return collectionData(featuredPostsQuery, {idField: 'id'});
 }
  
}
