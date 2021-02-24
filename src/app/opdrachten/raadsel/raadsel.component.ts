import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-raadsel",
  templateUrl: "./raadsel.component.html",
  styleUrls: ["./raadsel.component.css"]
})
export class RaadselComponent implements OnInit {
  showContent: boolean;

  constructor() { }

  ngOnInit() {
    this.showContent = false;
  }

  toggleShowContent(){
    this.showContent = !this.showContent;
  }

}
