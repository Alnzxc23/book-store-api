import {Component, OnInit} from '@angular/core';
import {Book} from "../shared/model/Book";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../services/book/book.service";
import {FormGroup, FormBuilder} from '@angular/forms'
import {Validators} from "@angular/forms";
import {Apiservice} from "../services/book/apiservice";

@Component({
  selector: 'app-ratepage',
  templateUrl: './ratepage.component.html',
  styleUrls: ['./ratepage.component.css']
})

export class RatepageComponent implements OnInit {
  book!: Book;
  feedbakerProduct: FormGroup;

  private bs: BookService;

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService, private formbuilder: FormBuilder, private api: Apiservice) {
    this.bs = bookService;

    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.book = bookService.getBookById(params['id']);
    })

  }

  addfeedback() {
    if(this.feedbakerProduct.value){
      this.api.feedbackBook(this.feedbakerProduct.value)
        .subscribe({
          next:(res)=>{
            alert("Коментарий добавлен")
            this.feedbakerProduct.reset();
          },
          error:()=>{
            alert("Ошибка")
          }
        })
    }
  }

  ngOnInit(): void {
 this.feedbakerProduct = this.formbuilder.group({
   name:[this.book.name, Validators.required],
  description: ['', Validators.required],
  stars: ['', Validators.required]

})

  }
}


