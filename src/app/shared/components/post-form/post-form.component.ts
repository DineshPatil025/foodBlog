import { Component, ElementRef, Inject, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FoodBlogService } from '../../services/food-blog.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  recipeForm !: FormGroup;
  inEditMode: boolean = false;
  bannerImg!: string;
  thumbnailImg!: string;




  separatorKeysCodes: number[] = [ENTER, COMMA];
  IngrediantCtrl = new FormControl('');
  filteredIngredients: Observable<string[]>;
  ingrediantArr: string[] = [];
  allingrediant: string[] = [];
  @ViewChild('ingrediantInp') ingrediantInp!: ElementRef<HTMLInputElement>;

  private _FBService = inject(FoodBlogService)


  constructor(
    private _matDialRef: MatDialogRef<PostFormComponent>,
    private _fb: FormBuilder
  ) {

    this.createRecipeForm()

    this.filteredIngredients = this.IngrediantCtrl.valueChanges.pipe(
      startWith(null),
      map((ingrediant: string | null) => (ingrediant ? this._filter(ingrediant) : this.allingrediant.slice())),
    );
  }

  ngOnInit(): void {
  }

  createRecipeForm() {
    this.recipeForm = new FormGroup({
      recTitle: new FormControl(null, Validators.required),
      recDescription: new FormControl(null, Validators.required),
      bannerImg: new FormControl(null, Validators.required),
      thumbnailImg: new FormControl(null, Validators.required),
      recMeal: new FormControl(null, Validators.required),
      recIngrediants: new FormControl(null, Validators.required),
    })
  }

  onRecipeSubmit() {
    let newObj = this.recipeForm.value
    // console.log({ ...newObj, recIngrediants: this.ingrediantArr });
    console.log(newObj);
    
    this._FBService.sendFoodBlog(newObj)
    this.recipeForm.reset();
    this._matDialRef.close();

  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.ingrediantArr.push(value);
      this.recipeForm.controls['recIngrediants'].setValue(this.ingrediantArr)
    }


    // Clear the input value
    event.chipInput!.clear();

    this.IngrediantCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.ingrediantArr.indexOf(fruit);

    if (index >= 0) {
      this.ingrediantArr.splice(index, 1);
      this.recipeForm.controls['recIngrediants'].setValue(this.ingrediantArr)

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

  fileUploader = (inpFileCtrl: any) => {
    return new Promise((resolve, reject) => {
      let selectedFile = inpFileCtrl.files[0];
      if (selectedFile) {

        let reader = new FileReader();
        reader.onload = (e) => {
          let imgObj = {
            fileName: selectedFile.name,
            fileType: selectedFile.type,
            fileSize: selectedFile.size,
            fileBase64: e.target?.result,
            fileUploadTime: Date.now(),

          }
          resolve(imgObj)
        }
        reader.readAsDataURL(selectedFile)

      } else {
        reject("something went wrong")
      }

    })
  }


  onBannerSelected(event: any) {

    const inpTarget = event.target;

    this.fileUploader(inpTarget)
      .then(res => {
        console.log(res)
        let bannImgObj = res
        this.recipeForm.controls['bannerImg'].setValue(bannImgObj)
      });

    
  }


  onThumnailSelected(event: any) {


    const inpTarget = event.target;

    this.fileUploader(inpTarget)
      .then(res => {
        console.log(res)
        let thumImgObj = res
        this.recipeForm.controls['thumbnailImg'].setValue(thumImgObj)
      });

    
  }

}
