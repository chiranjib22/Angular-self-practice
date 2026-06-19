import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book-list/book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/books');
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`/api/books/${id}`);
  }

  save(book: Book): Observable<Book> {
    if (!book.id) {
      return this.http.post<Book>('/api/books', book);
    }
    return this.http.put<Book>(`/api/books/${book.id}`, book);
  }
}
