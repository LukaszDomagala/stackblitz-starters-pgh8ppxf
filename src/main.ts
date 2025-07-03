import { bootstrapApplication } from "@angular/platform-browser";
import { Component } from "@angular/core";
import { RouterModule, provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { BooksSearchPageComponent } from "./app/components/books-search-page.component";
import { BookDetailsPageComponent } from "./app/components/book-details-page.component";

@Component({
  selector: "app-root",
  template: `<router-outlet></router-outlet>`,
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class App { }

const routes = [
  { path: "", component: BooksSearchPageComponent },
  { path: "book/:id", component: BookDetailsPageComponent },
  { path: "**", redirectTo: "" },
];


bootstrapApplication(App, {
  providers: [provideRouter(routes), provideHttpClient()],
}).catch((err) => console.error(err));
