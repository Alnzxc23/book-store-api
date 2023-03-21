import {Component, OnInit} from '@angular/core';
import {Book} from "../shared/model/Book";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../services/book/book.service";
import {FormGroup, FormBuilder} from '@angular/forms'
import {Validators} from "@angular/forms";
import {Apiservice} from "../services/book/apiservice";
import {resolve} from "@angular/compiler-cli";
@Component({
  selector: 'app-feedbacktable',
  templateUrl: './feedbacktable.component.html',
  styleUrls: ['./feedbacktable.component.css']

})
export class FeedbacktableComponent implements OnInit {

  book!: Book;
  books: Book[] = [];
  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService, private api: Apiservice) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.book = bookService.getBookById(params['id']);
    })

  }
 getfeedbakAll(){
    this.api.getBook()
      .subscribe({
        next:(res)=>{
          console.log(res)
        }
      })
 }
  ngOnInit(): void {
    this.books = this.bookService.getAll();
    this.getfeedbakAll();
    }
}

