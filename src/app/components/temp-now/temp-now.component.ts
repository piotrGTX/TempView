import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-temp-now",
  templateUrl: "./temp-now.component.html",
  styleUrls: ["./temp-now.component.scss"]
})
export class TempNowComponent implements OnInit {
  @Input()
  value: number;

  constructor() {}

  ngOnInit() {}
}
