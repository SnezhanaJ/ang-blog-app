import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-navbar.component.html',
  styleUrl: './category-navbar.component.css'
})
export class CategoryNavbarComponent implements OnInit {

  categoryArray: any[]=[];

  constructor(private categoryService: CategoriesService){
  }

  ngOnInit(): void {
     this.categoryService.getData().subscribe(value=>{
       this.categoryArray = value;
     })
  }


}
