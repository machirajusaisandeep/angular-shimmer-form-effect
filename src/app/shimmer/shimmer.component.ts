import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shimmer',
  templateUrl: './shimmer.component.html',
  styleUrls: ['./shimmer.component.css']
})
export class ShimmerComponent implements OnInit {
   arr=new Array(10);
  constructor() { }

  ngOnInit() {
  }

}