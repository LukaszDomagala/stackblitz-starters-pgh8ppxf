import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Book } from '../models/book';

export interface BooksListOptions {
  displayAuthors?: boolean;
}

@Component({
  selector: 'app-books-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" *ngIf="books.length">
      <div 
          *ngFor="let book of books"
          (click)="showBookDetails(book.id)"
          class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      >
        <img 
          *ngIf="book.thumbnail"
          [src]="book.thumbnail"
          [alt]="book.title"
          class="w-full h-48 object-contain mb-4"
        >
        <h3 class="text-xl font-semibold mb-3 text-gray-800">{{ book.title }}</h3>
        <p *ngIf="options.displayAuthors" class="text-gray-600">
          By: {{ book.authors }}
        </p>
      </div>
    </div>
    <p 
      *ngIf="!books.length" 
      class="text-center text-gray-600 mt-8"
    >
      No books found.
    </p>
  `
})
export class BooksListComponent {
  router = inject(Router);
  
  books: Book[] = [];
  options: BooksListOptions = {};

  showBookDetails(id: string) {
    this.router.navigate(['/book', id]);
  }
}