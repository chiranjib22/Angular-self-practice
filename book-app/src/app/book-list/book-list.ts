import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BookService } from '../services/book.service';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
import { delay } from 'rxjs';
import { Highlight } from '../directives/highlight';
import { Show } from '../directives/show';

@Component({
  selector: 'book-book-list',
  imports: [RouterLink, NgTemplateOutlet, Highlight, Show],

  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookList implements OnInit {
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.bookService
      .getAllBooks()
      .pipe(delay(5000))
      .subscribe((books) => {
        this.books = books;
        this.cdr.detectChanges();
      });
  }

  get topRatedBooks(): Book[] {
    return this.books
      .filter((b) => b.rating && b.rating >= 4)
      .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
  }
}
