import { Component, OnInit } from '@angular/core';
import {BookService} from "../services/book/book.service";
import {Book} from "../shared/model/Book";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books:Book[] = [];
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getAll();
  }

}
