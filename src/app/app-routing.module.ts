import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBookComponent} from './list-book/list-book.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {DeleteBookComponent} from './delete-book/delete-book.component';
import {EditBookComponent} from './edit-book/edit-book.component';
import {DetailBookComponent} from './detail-book/detail-book.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: '',
  component: ListBookComponent},
  {path: 'create',
    component: CreateBookComponent},
  {path: 'delete/:id',
    component: DeleteBookComponent},
  {path: 'edit/:id',
    component: EditBookComponent},
  {path: 'detail/:id',
    component: DetailBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule,
  HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
