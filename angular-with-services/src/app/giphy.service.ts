import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GiphyService {
  API_URL = "http://localhost:5000/search";

  constructor(private http: HttpClient) {}
  getImages(searchTerm) {
    const url = `${this.API_URL}/${searchTerm}`;
    return this.http.get(url);
  }
}
