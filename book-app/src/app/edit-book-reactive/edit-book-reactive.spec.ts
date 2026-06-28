import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookReactive } from './edit-book-reactive';

describe('EditBookReactive', () => {
  let component: EditBookReactive;
  let fixture: ComponentFixture<EditBookReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBookReactive],
    }).compileComponents();

    fixture = TestBed.createComponent(EditBookReactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
