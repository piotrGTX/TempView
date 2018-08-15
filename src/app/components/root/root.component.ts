import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./root.component.html",
  styleUrls: ["./root.component.scss"]
})
export class RootComponent implements OnInit {
  valueNow: number;
  valueMax: number;
  valueAvg: number;
  valueMin: number;

  ngOnInit() {
    this.valueNow = 30;
    this.valueMax = 31;
    this.valueMax = 28;
    this.valueAvg = 29;
    setTimeout(() => {
      this.valueNow = this.valueNow + Math.floor(Math.random() * 4) - 2;
      this.valueMax =
        this.valueMax < this.valueNow ? this.valueNow : this.valueMax;
      this.valueMin =
        this.valueMin > this.valueNow ? this.valueNow : this.valueMin;
    }, 1500);
  }
}
