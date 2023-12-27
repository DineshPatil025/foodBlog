import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Subject, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodBlogService {
  foodblogUrl: string = `${environment.baseUrl}/foodblog.json`;

  private sendFBSubject$ = new Subject();
  sendFBSubjectAsObs$ = this.sendFBSubject$.asObservable();

  private _http = inject(HttpClient);
  foodblogArray!: any;

  constructor() { }


  getAllFBlogs() {
    return this._http.get(this.foodblogUrl)
      .pipe(
        map((res: any) => {
          this.foodblogArray = []
          for (const key in res) {
            this.foodblogArray.unshift({ ...res[key], fbId: key })
            console.log(this.foodblogArray);
          }
          return this.foodblogArray;
        }))
  }

  sendFoodBlog(newFBBlog: any) {
    console.log(newFBBlog);
    this._http.post(this.foodblogUrl, newFBBlog)
      .subscribe(res => {
        console.log(res);
        this.sendFBSubject$.next({ ...newFBBlog, fbId: res })
      });
  }
}
