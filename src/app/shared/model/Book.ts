import {Rating} from "./Rating";

/**
 * Класс Книга
 */
export class Book {

  id!: number;
  name!: string;
  imageUrl!: string;
  paged!: number;
  genre!: string;
  description!: string;
  star!: number;
  ratings?: Rating[];

}
