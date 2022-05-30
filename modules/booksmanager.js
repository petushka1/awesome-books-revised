import Book from './book.js';

const bookUniqueId = 'bookStorage';

class BooksManager {
  constructor() {
    const idCounterTemp = localStorage.getItem('idCounter');

    if (idCounterTemp !== null) {
      this.idCounter = parseInt(idCounterTemp, 10);
    } else {
      this.idCounter = 0;
    }

    const booksTemp = localStorage.getItem(bookUniqueId);

    if (booksTemp !== null) {
      this.books = JSON.parse(booksTemp);
    } else {
      this.books = [];
    }
  }

  remove(id) {
    this.books = this.books.filter((book) => book.bookId !== id);
    localStorage.setItem(bookUniqueId, JSON.stringify(this.books));
  }

  add(title, author) {
    this.idCounter += 1;
    const newBook = new Book(this.idCounter, title, author);
    this.books.push(newBook);
    localStorage.setItem(bookUniqueId, JSON.stringify(this.books));
    localStorage.setItem('idCounter', this.idCounter);
    return newBook;
  }

  getAllBooks() {
    return this.books;
  }

  isEmpty() {
    return this.books.length === 0;
  }
}

const booksManager = new BooksManager();
export default booksManager;
