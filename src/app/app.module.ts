import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './shared/components/search-form/search-form.component';
import { OwlCarasoulComponent } from './shared/components/owl-carasoul/owl-carasoul.component';
import { HttpClientModule } from '@angular/common/http';
import { FbDashComponent } from './shared/components/fb-dash/fb-dash.component';
import { FbCardComponent } from './shared/components/fb-card/fb-card.component';
// import { OwlCarousel } from 'ngx-owl-carousel';
// import { CarouselModule } from 'ngx-owl-carousel-o';
// import { OwlModule } from 'ngx-owl-carousel';
// import{CarouselModule} from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    SearchFormComponent,
    OwlCarasoulComponent,
    FbDashComponent,
    FbCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
