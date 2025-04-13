import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="max-w-4xl mx-auto p-6">
      <h1 class="text-3xl font-bold mb-6 text-gray-800">Book Search</h1>
      <div class="flex gap-3 mb-8">
        <input 
          type="text" 
          [(ngModel)]="searchQuery" 
          placeholder="Search for books..."
          (keyup.enter)="searchBooks()"
          class="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
        <button 
          (click)="searchBooks()"
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Search
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" *ngIf="books.length">
        <div 
          *ngFor="let book of books"
          (click)="showBookDetails(book.id)"
          class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        >
          <img 
            *ngIf="book.imageLinks?.thumbnail"
            [src]="book.imageLinks!.thumbnail"
            [alt]="book.title"
            class="w-full h-48 object-contain mb-4"
          >
          <h3 class="text-xl font-semibold mb-3 text-gray-800">{{ book.title }}</h3>
          <p *ngIf="book.authors" class="text-gray-600">
            By: {{ book.authors }}
          </p>
        </div>
      </div>

      <p 
        *ngIf="!books.length && hasSearched" 
        class="text-center text-gray-600 mt-8"
      >
        No books found.
      </p>
    </div>
  `
})
export class BookListComponent {
  searchQuery = '';
  books: Book[] = [];
  hasSearched = false;

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  searchBooks() {
    if (this.searchQuery.trim()) {
      this.bookService.searchBooks(this.searchQuery)
        .subscribe(books => {
          this.books = books;
          this.hasSearched = true;
        });
    }
  }

  showBookDetails(id: string) {
    this.router.navigate(['/book', id]);
  }
}