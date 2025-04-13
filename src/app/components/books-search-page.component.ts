import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { BooksListComponent, BooksListOptions } from "./books-list.component";

@Component({
    selector: 'app-books-searhc-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, ReactiveFormsModule, BooksListComponent],
    template: `
    <div class="max-w-4xl mx-auto p-6">
        <h1 class="text-3xl font-bold mb-6 text-gray-800">Book Search</h1>
        <div class="flex gap-3">
            <input 
                type="text" 
                [formControl]="queryControl"
                placeholder="Search for books..."
                class="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                [ngClass]="{'bg-red-100': queryControl.errors}"
            >
            <button 
                (click)="searchBooks()"
                class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Search
            </button>
        </div>

        <div>
            <button 
                (click)="toggleDisplayAuthors()"
                class="my-5 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Toggle
            </button>
            <span class="ml-4">Display authors: {{options.displayAuthors}}</span>
        </div>

        <app-books-list/>
    </div>
  `
})
export class BooksSearchPageComponent {
    router = inject(Router);
    bookService = inject(BookService);
    
    queryControl = new FormControl('');
    books = this.bookService.searchBooks('test');
    options: BooksListOptions = { displayAuthors: true };

    searchBooks() {
        // TODO
    }

    toggleDisplayAuthors() {
        this.options.displayAuthors = !this.options.displayAuthors;
    }

    showBookDetails(id: string) {
        this.router.navigate(['/book', id]);
    }
}