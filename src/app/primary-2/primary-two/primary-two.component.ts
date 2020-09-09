import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-two',
  templateUrl: './primary-two.component.html',
  styleUrls: ['./primary-two.component.css']
})
export class PrimaryTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public reload(): void {
    window.location.reload();
  }

}
