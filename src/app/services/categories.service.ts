import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private afs: Firestore) { }

  getData(): Observable<any[]> {
    const collectionInstance = collection(this.afs, 'categories');
    return collectionData(collectionInstance, {idField: 'id'});
 }
 
}
