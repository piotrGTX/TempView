import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RootComponent } from "./components/root/root.component";
import { TempNowComponent } from "./components/temp-now/temp-now.component";

@NgModule({
  declarations: [RootComponent, TempNowComponent],
  imports: [BrowserModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
