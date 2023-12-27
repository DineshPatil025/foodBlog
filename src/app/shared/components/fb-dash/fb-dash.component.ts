import { Component, OnInit, inject } from '@angular/core';
import { FoodBlogService } from '../../services/food-blog.service';

@Component({
  selector: 'app-fb-dash',
  templateUrl: './fb-dash.component.html',
  styleUrls: ['./fb-dash.component.scss']
})
export class FbDashComponent implements OnInit {


  foodblogArray!: any;
  private _fbService = inject(FoodBlogService)


  constructor() {
    this._fbService.getAllFBlogs()
      .subscribe(res => {
        console.log(res)
      this.foodblogArray = res
      })
      this._fbService.sendFBSubjectAsObs$
      .subscribe(res => {
        this.foodblogArray.unshift(res)
      })
  }



  ngOnInit(): void {
  }

}
