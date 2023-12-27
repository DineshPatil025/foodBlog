import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fb-card',
  templateUrl: './fb-card.component.html',
  styleUrls: ['./fb-card.component.scss']
})
export class FbCardComponent implements OnInit {

@Input() fBlog !:any;


  constructor() { }

  ngOnInit(): void {
  }

}
