import { Component, OnInit } from '@angular/core';
import {IBook} from '../service/ibook';
import {BookService} from '../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  book: IBook;
  id: number;
  constructor(
    private bookService: BookService,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
    });
    this.getById(this.id);
  }

  getById(id: number): IBook {
    this.bookService.findById(id).subscribe(data => {
      this.book = data;
    });
    return this.book;
  }
}
