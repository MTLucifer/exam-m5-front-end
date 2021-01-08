import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  id: number;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
    });
  }
  // tslint:disable-next-line:typedef
  onDelete() {
    this.bookService.delete(this.id).toPromise().then(value => {
      console.log('Delete', value);
      this.router.navigate(['/']);
    });
  }

}
