import {Injectable} from '@angular/core';
import {Book} from "../../shared/model/Book";
import BookData from "../../../../data.json"

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[];


  /**
   * Конструктор
   */
  constructor() {
  }

  /**
   * Получить книгу по идентификатору
   * @param id - идентификатор книги
   */
  getBookById(id: number): Book {
    return this.getAll().find(book => book.id == id)!;
  }

  /**
   * Обновление книги после выставления рейтинга
   * @param book
   */
  updateBook(book: Book) {
    let databasebook = this.getBookById(book.id);
    this.getBookById(book.id);
    databasebook.ratings.push(book.ratings[book.ratings.length-1]);

  }

  /**
   * Получить список всех книг
   */
  getAll(): Book[] {
    return BookData;
  }
}
