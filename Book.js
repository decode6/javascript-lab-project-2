class Book {
  constructor(isbn, title, year,author) {
    this.isbn = isbn;
    this.title = title;
    this.year = year;
    this.author = author;
  }
 

  instances = {}; 

  static loadAll() { 
    const books = window.localStorage.getItem('books');  

    const parsedBooks = JSON.parse(books);  

    this.instances = { ...parsedBooks };

    return parsedBooks;
  }



 static saveAll() { 
    const books = JSON.stringify(this.instances);

    try {
      window.localStorage.setItem('books', books);
    } catch {
      throw Error('Can not save books to local storage');
    }
  }

  static save() { 
    const books = JSON.parse(window.localStorage.getItem('books'));
    const updatedBooks = JSON.stringify({ ...books, ...this.instances });

    try {
      window.localStorage.setItem('books', updatedBooks);
    } catch {
      throw Error('Can not save books to local storage');
    }
  }

  static create({ isbn, title, year, author }) {
    const book = new Book(isbn, title, year, author);

    const updatedInstances = { ...this.instances }; 

    updatedInstances[`${isbn}`] = book;

    this.instances = updatedInstances;

    Book.save();
  }






  static update(isbn, newData) {
    const book = this.instances[isbn];

    book.title = newData.title;
    book.year = newData.year;
    book.author = newData.author;

    Book.save();
  }

  static delete(isbn) {
    const book = this.instances[isbn];

    if (book) {
      delete this.instances[book.isbn];
      Book.saveAll();
    } else {
      console.log('no such book exists');
    }
  }

  static createTestData() {
    Book.create({ isbn: '006251587X', title: 'Some title', year: 2021 });
    Book.create({ isbn: '006251512', title: 'Different title', year: 1996 });
    Book.create({ isbn: '0062515123', title: 'Different title3', year: 1990 });

    Book.saveAll();
    alert('Books saved Successfully');
  }

  static clearData() {
    if (confirm('Do you really want to delete all the data?')) {
      window.localStorage.clear();
    }
  }
}
