import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, limit, orderBy, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs: Firestore) { }

  getData(limitCount : any): Observable<any[]> {
    const collectionInstance = collection(this.afs, 'posts');
    const featuredPostsQuery = query(collectionInstance, where('isFeatured', '==', true), limit(limitCount));

    return collectionData(featuredPostsQuery, {idField: 'id'});
 }

  getLatest(): Observable<any[]> {
    const collectionInstance = collection(this.afs, 'posts');
    const latestPosts = query(collectionInstance, orderBy('createdAt', 'desc'));

    return collectionData(latestPosts, {idField: 'id'});
}
  loadCategoryPosts(categoryId: any): Observable<any[]>{
    const collectionInstance = collection(this.afs, 'posts');
    const categoryPosts = query(collectionInstance, where('category.id', '==', categoryId));
    return collectionData(categoryPosts, {idField: 'id'});
  }
  loadOnePost(postId:any){
    const docInstance = doc(this.afs, 'posts', postId);
    return docData(docInstance);
  }
  loadSimilar(catId: any, limitCount:any){
    const collectionInstance = collection(this.afs, 'posts');
    const categoryPosts = query(collectionInstance, where('category.id', '==', catId), limit(limitCount));
    return collectionData(categoryPosts, {idField: 'id'});
  }
}
