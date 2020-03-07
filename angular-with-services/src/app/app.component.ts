import { Component } from "@angular/core";
import { GiphyService } from "./giphy.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private giphyService: GiphyService) {}
  images = [];
  loading = false;
  searchTerm = "";
  submit() {
    this.loading = true;
    this.images = [];
    this.giphyService.getImages(this.searchTerm).subscribe((result: any) => {
      this.images = result.data;
      this.loading = false;
    });
  }
}
