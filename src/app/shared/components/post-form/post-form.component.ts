import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable,  map, startWith } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {


  inEditMode: boolean = false;

 


  separatorKeysCodes: number[] = [ENTER, COMMA];
  IngrediantCtrl = new FormControl('');
  filteredIngredients: Observable<string[]>;
  ingrediantArr: string[] = [];
  allingrediant: string[] = [];
  @ViewChild('ingrediantInp') ingrediantInp!: ElementRef<HTMLInputElement>;
  constructor(
    private _matDialRef: MatDialogRef<PostFormComponent>,
  ) {
   
    this.filteredIngredients = this.IngrediantCtrl.valueChanges.pipe(
      startWith(null),
      map((ingrediant: string | null) => (ingrediant ? this._filter(ingrediant) : this.allingrediant.slice())),
    );
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.ingrediantArr.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.IngrediantCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.ingrediantArr.indexOf(fruit);

    if (index >= 0) {
      this.ingrediantArr.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.ingrediantArr.push(event.option.viewValue);
    this.ingrediantInp.nativeElement.value = '';
    this.IngrediantCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allingrediant.filter(ingrediant => ingrediant.toLowerCase().includes(filterValue));
  }


  onCloseDialog() {
    this._matDialRef.close()

  }

  onPostUpdate() {

  }

}
