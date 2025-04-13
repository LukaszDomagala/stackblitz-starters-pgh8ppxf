import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  searchBooks(query: string): Observable<Book[]> {
    return this.http.get<any>(`${this.apiUrl}?q=${encodeURIComponent(query)}`)
      .pipe(
        map(response => response.items?.map((item: any) => this.mapBookResponse(item)) || [])
      );
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(item => this.mapBookResponse(item))
    );
  }

  private mapBookResponse(item: any): Book {
    const volumeInfo = item.volumeInfo || {};
    return {
      id: item.id,
      title: volumeInfo.title || '',
      authors: volumeInfo.authors ? volumeInfo.authors.join(', ') : '',
      description: volumeInfo.description,
      publisher: volumeInfo.publisher,
      publishedDate: volumeInfo.publishedDate,
      pageCount: volumeInfo.pageCount,
      imageLinks: volumeInfo.imageLinks
    };
  }
}