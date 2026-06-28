import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'book-edit-book-reactive',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './edit-book-reactive.html',
  styleUrl: './edit-book-reactive.scss',
})
export class EditBookReactive implements OnInit {
  // name = new FormControl();
  // author = new FormControl();
  // publishedYear = new FormControl();
  // rating = new FormControl();
  // //publisher = new FormControl()
  // publisherName = new FormControl();
  // publisherType = new FormControl();
  // category = new FormControl('');
  // description = new FormControl();

  form = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    author: new FormControl(),
    publishedYear: new FormControl(),
    rating: new FormControl(),
    publisher: new FormGroup({
      publisherName: new FormControl(),
      publisherType: new FormControl(),
    }),
    category: new FormControl(),
    description: new FormControl(),
  });

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const bookId = Number(paramMap.get('id'));
      if (!bookId) return;
      else this.getBook(bookId);
    });
  }

  getBook(id: number) {
    this.bookService.getBook(id).subscribe((book) => {
      console.log(book);
      this.form.patchValue(book);
    });
  }

  saveBook() {
    console.log(this.form.value);
    this.bookService.save(this.form.value).subscribe((book) => {
      console.log(book);
    });
  }
}
