import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book, BookDetails } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  httpClient = inject(HttpClient);

  // GET https://www.googleapis.com/books/v1/volumes?maxResults=6&q={query}
  searchBooks(query: string): Observable<Book[]> {
    return of([
      {
        id: 'xeZDDwAAQBAJ',
        title: 'Expert Angular',
        authors: 'Mathieu Nayrolles, Rajesh Gunasundaram, Sridhar Rao'
      },
      {
        id: '-VUnCgAAQBAJ',
        title: 'Learning React',
        authors: '-'
      }
    ])
  }

  // GET https://www.googleapis.com/books/v1/volumes/{id}
  getBook(id: string): Observable<BookDetails> {
    return of({
      id: 'xeZDDwAAQBAJ',
      title: 'Expert Angular',
      authors: 'Mathieu Nayrolles, Rajesh Gunasundaram, Sridhar Rao',
      description: 'Learn everything you need to build highly scalable, robust web applications using Angular.',
      publisher: 'Packt Publishing Ltd',
      publishedDate: '2017-07-31',
      pageCount: 454,
    })
  }
}