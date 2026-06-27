import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book-list/book.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BookService {

  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/api/books`);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/api/books/${id}`);
  }

  save(book: Book): Observable<Book> {
    if (!book.id) {
      return this.http.post<Book>(`${this.baseUrl}/api/books`, book);
    }
    return this.http.put<Book>(`${this.baseUrl}/api/books/${book.id}`, book);
  }
}
