import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-two',
  templateUrl: './secondary-two.component.html',
  styleUrls: ['./secondary-two.component.css']
})
export class SecondaryTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public reload(): void {
    window.location.reload();
  }
}
