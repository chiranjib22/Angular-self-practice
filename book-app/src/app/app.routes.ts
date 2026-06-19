import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Catalog } from './catalog/catalog';
import { BookList } from './book-list/book-list';
import { EditBook } from './edit-book/edit-book';

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'catalog',
    component: Catalog,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'books',
    component: BookList,
  },
  {
    path: 'books/edit',
    component: EditBook,
  },
  {
    path: 'books/edit/:id',
    component: EditBook,
  },
];
