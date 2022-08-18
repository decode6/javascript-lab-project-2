init.view.deleteBook = {
  setupUI: function () {
    const deleteBtn = document.forms['Book'].commit;
    const selectBookElement = document.forms['Book'].selectBook;

    const books = Book.loadAll();

    const keys = Object.keys(books);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];

      const book = books[key];

      const optionElement = document.createElement('option');
      optionElement.text = book.title;
      optionElement.value = book.isbn;
      selectBookElement.add(optionElement, null);
    }

    deleteBtn.addEventListener('click', init.view.deleteBook.handleDeleteButtonClick);
  },

  handleDeleteButtonClick: function () {
    const selectElement = document.forms['Book'].selectBook;
    const isbn = selectElement.value;

    if (isbn && confirm('Are you sure you want to delete this book?')) {
      Book.delete(isbn);
      selectElement.remove(selectElement.selectedIndex);
    }
  },
};
