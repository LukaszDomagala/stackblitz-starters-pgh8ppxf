import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-4xl mx-auto p-6">
      <button 
        (click)="goBack()"
        class="mb-6 px-4 py-2 text-blue-600 hover:text-blue-800 flex items-center gap-2"
      >
        ← Back to Search
      </button>

      <div *ngIf="book" class="bg-white rounded-lg shadow-lg p-8">
        <div class="flex flex-col md:flex-row gap-8">
          <div class="md:w-1/3">
            <img 
              *ngIf="book.imageLinks?.thumbnail"
              [src]="book.imageLinks!.thumbnail"
              [alt]="book.title"
              class="w-full rounded-lg shadow-md"
            >
          </div>
          <div class="md:w-2/3">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ book.title }}</h1>
            <p *ngIf="book.authors" class="text-xl text-gray-600 mb-4">
              By {{ book.authors }}
            </p>
            <div *ngIf="book.publisher || book.publishedDate" class="mb-4 text-gray-600">
              <p *ngIf="book.publisher">Publisher: {{ book.publisher }}</p>
              <p *ngIf="book.publishedDate">Published: {{ book.publishedDate }}</p>
              <p *ngIf="book.pageCount">Pages: {{ book.pageCount }}</p>
            </div>
            <div *ngIf="book.description" class="prose max-w-none">
              <h2 class="text-xl font-semibold mb-2">Description</h2>
              <p class="text-gray-700" [innerHTML]="book.description"></p>
            </div>
          </div>
        </div>
      </div>

      <pre>{{id|async|json}}</pre>

      <div *ngIf="error" class="text-center text-red-600 mt-8">
        {{ error }}
      </div>
    </div>
  `,
})
export class BookDetailsComponent implements OnInit {
  book: Book | null = null;
  error: string = '';
  id: Observable<{ id: string }> = this.route.params;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.bookService.getBook(id).subscribe({
        next: (book) => (this.book = book),
        error: (err) => (this.error = 'Failed to load book details'),
      });
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
