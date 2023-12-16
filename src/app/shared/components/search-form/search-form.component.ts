import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  
  constructor(private _matDialRef: MatDialogRef<SearchFormComponent>) { }

  ngOnInit(): void {
  }

  onCloseSearch() {
    this._matDialRef.close();
  }

}
