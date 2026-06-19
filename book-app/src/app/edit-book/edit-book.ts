import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Book } from '../book-list/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'book-edit-book',
  imports: [FormsModule, RouterLink],
  templateUrl: './edit-book.html',
  styleUrl: './edit-book.scss',
})
export class EditBook implements OnInit {
  book: Book = {
    id: 0,
    name: '',
    author: '',
    publishedYear: null,
    rating: null,
    publisher: {
      publisherName: '',
      publisherType: '',
    },
    category: '',
    description: '',
  };

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const bookId = Number(paramMap.get('id'));
      if (!bookId) return;
      else this.getBook(bookId);
    });
  }

  getBook(id: number) {
    this.bookService.getBook(id).subscribe((res) => {
      this.book = res;
      this.cdr.detectChanges();
    });
  }

  saveBook() {
    this.bookService.save(this.book).subscribe((res) => {
      //console.log(res);
      this.router.navigate(['/books']);
    });
  }

  saveBookByForm(form: NgForm) {
    console.log(form);
    this.bookService.save(form.value).subscribe((res) => {});
  }

  // checkH1(h1: HTMLHeadElement) {
  //   console.log(h1);
  // }
}
