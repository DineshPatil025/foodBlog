import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owl-carasoul',
  templateUrl: './owl-carasoul.component.html',
  styleUrls: ['./owl-carasoul.component.scss']
})
export class OwlCarasoulComponent implements OnInit {

  customOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4,
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
