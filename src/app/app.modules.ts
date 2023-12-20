import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { environment } from "../environments/environment.prod";
import { AppComponent } from "./app.component";
import { provideFirebaseApp, getApp, initializeApp} from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { provideStorage, getStorage } from '@angular/fire/storage';
import { CategoriesService } from "./services/categories.service";
import { FirestoreModule } from '@angular/fire/firestore';
import { CategoryNavbarComponent } from "./layouts/category-navbar/category-navbar.component";
import { PostsService } from "./services/posts.service";
import { CommentService } from "./services/comment.service";

@NgModule({
    imports: [
        BrowserModule,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
        //provideStorage(()=>getStorage(initializeApp(environment.firebaseConfig))),
        RouterModule,
        AppComponent,
        FirestoreModule,
        RouterModule.forRoot(routes),
        CategoryNavbarComponent
    ],
    providers: [
        CategoriesService, PostsService, CommentService
    ]
})
export class AppModule{
}