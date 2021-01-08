import {Component, OnInit} from '@angular/core';
import {IBook} from '../service/ibook';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  private id: number;
  book: IBook;
  editForm: FormGroup;

  constructor(
    private bookService: BookService,
    private activeRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      title: [''],
      author: [''],
      description: ['']
    });
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
      this.bookService.findById(this.id).toPromise().then(value => {
        console.log(value);
        this.book = value;
        this.editForm.patchValue({
          title: this.book.title,
          author: this.book.author,
          description: this.book.description
        });
      });
    });
  }

  // tslint:disable-next-line:typedef
  onUpdate() {
    if (this.editForm) {
      this.book.title = this.editForm.value.title;
      this.book.author = this.editForm.value.author;
      this.book.description = this.editForm.value.description;
      console.log(this.book);
      this.bookService.update(this.book, this.book.id).toPromise().then(value => {
        console.log('Update', value);
      });
      this.router.navigate(['/']);
    }
  }
}
