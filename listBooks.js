init.view.listBooks = {
  setupUI: function () {
    const tableBodyElement = document.querySelector('table#books>tbody');

    const books = Book.loadAll();

    const keys = Object.keys(books);

    for (let i = 0; i < keys.length; i++) {
      book = keys[i];

      const row = tableBodyElement.insertRow();
      row.insertCell(-1).textContent = books[book].isbn;
      row.insertCell(-1).textContent = books[book].title;
      row.insertCell(-1).textContent = books[book].year;
      row.insertCell(-1).textContent = books[book].author;
    }
  },
};
