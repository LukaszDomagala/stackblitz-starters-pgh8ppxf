import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetails } from '../models/book';

@Component({
  selector: 'app-book-details',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div *ngIf="book() as book" class="bg-white rounded-lg shadow-lg p-8">
      <div class="flex flex-col md:flex-row gap-8">
        <div class="md:w-1/3">
          <img 
            *ngIf="book.thumbnail"
            [src]="book.thumbnail"
            [alt]="book.title"
            class="w-full rounded-lg shadow-md"
          >
        </div>
        <div class="md:w-2/3">
          <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ book.title }}</h1>
          <p *ngIf="book.authors" class="text-xl text-gray-600 mb-4">
            By {{ book.authors }}
          </p>
          <div class="mb-4 text-gray-600">
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
  `,
})
export class BookDetailsComponent {
  book = input<BookDetails | null>()
}
