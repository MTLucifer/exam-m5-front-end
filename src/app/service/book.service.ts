import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from './ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  urlAPI = 'http://localhost:3000/books';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.urlAPI);
  }

  create(book: IBook): Observable<any> {
    return this.http.post<IBook>(this.urlAPI, book);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.urlAPI + `/${id}`);
  }

  findById(id: number): Observable<any> {
    return this.http.get(this.urlAPI + `/${id}`);
  }

  update(book: IBook, id: number): Observable<any> {
    return this.http.put(this.urlAPI + `/${id}`, book);
  }
}
