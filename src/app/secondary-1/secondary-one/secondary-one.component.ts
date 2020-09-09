import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-one',
  templateUrl: './secondary-one.component.html',
  styleUrls: ['./secondary-one.component.css']
})
export class SecondaryOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public reload(): void {
    window.location.reload();
  }
}
