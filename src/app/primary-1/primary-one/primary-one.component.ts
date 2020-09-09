import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-one',
  templateUrl: './primary-one.component.html',
  styleUrls: ['./primary-one.component.css']
})
export class PrimaryOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public reload(): void {
    window.location.reload();
  }
}
