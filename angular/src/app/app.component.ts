import { Component } from "@angular/core";
import API from "../API";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor() {}
  images = [];
  loading = false;
  searchTerm = "";
  submit() {
    this.loading = true;
    this.images = [];
    API.search(this.searchTerm).then(images => {
      this.images = images;
      this.loading = false;
    });
  }
}
