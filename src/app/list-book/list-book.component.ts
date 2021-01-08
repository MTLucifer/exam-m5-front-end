import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {IBook} from '../service/ibook';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  bookClass: IBook[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): IBook[] {
    this.bookService.getAll().subscribe((data: any) => {
      this.bookClass = data;
    });
    return this.bookClass;
  }
}
