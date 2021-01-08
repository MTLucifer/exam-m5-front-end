import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {BookService} from '../service/book.service';
import {IBook} from '../service/ibook';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  createForm: FormGroup;
  constructor(
    private router: Router,
    private bookService: BookService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: [null],
      author: [null],
      description: [null]
    });
  }

  createNewBook() {
    const newBook: IBook = this.createForm.value;
    console.log(newBook);
    this.bookService.create(newBook).subscribe(() => {
      alert('Add new book successful');
      this.router.navigate(['/']);
    }, error => {
      alert('Something wrong');
    });
  }

}
