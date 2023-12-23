import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { SearchFormComponent } from './shared/components/search-form/search-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  title = 'foodBlog';

  constructor(private _dialog: MatDialog) { }
  ngOnInit(): void { }


  openPostForm() {
    let matDialCongif = new MatDialogConfig;
    matDialCongif.width = "500px";
    // matDialCongif.hasBackdrop = false;

    this._dialog.open(PostFormComponent, matDialCongif)
  }


  onSearchClick() {
    console.log("search clicked");
    let matDialCongif = new MatDialogConfig;
    matDialCongif.width = "500px"
    // matDialCongif.position 
    this._dialog.open(SearchFormComponent, matDialCongif)

  }
}
