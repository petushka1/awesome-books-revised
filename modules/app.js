import { booksManager } from './booksmanager.js';

const booksList = document.querySelector('.books-list');


const renderBook = (book) => {
  const bookItem = document.createElement('div');
  bookItem.id = book.bookId;
  bookItem.className = 'bookItem';
  bookItem.innerHTML = `
    <span><b>“${book.bookTitle}”</b> by ${book.bookAuthor}</span>
    <button class="btn" type="button" name="button" value="remove">Remove</button>
  `;

  return bookItem;
}

const toggleBooksListClasses = (force) => booksList.classList.toggle('empty-list', force);

const populateBooks = () => {
  const books = booksManager.getAllBooks();
  books.forEach((book) => { booksList.appendChild(renderBook(book)); });

  if (!booksManager.isEmpty()) {
    toggleBooksListClasses(false);
  }
}

const remove = (e) => {
  if (e.target.classList.contains('btn')) {
    const bookItem = e.target.parentElement;
    bookItem.style.display = 'none';
    booksManager.remove(parseInt(bookItem.id));

    if (booksManager.isEmpty()) {
      toggleBooksListClasses(true);
    }
  }
}

const add = (event) => {
  event.preventDefault();
  toggleBooksListClasses(false);
  const book = booksManager.add(this.elements.title.value,
    this.elements.author.value);
  booksList.appendChild(renderBook(book));

  document.body.querySelector('.listStyle a').click();
}

export {remove, add, populateBooks};
