init.view.createBook = {
  setupUI: function () {
    const saveBtn = document.forms['Book'].commit; 

    Book.loadAll();

    saveBtn.addEventListener('click', init.view.createBook.handleSaveButtonClick);
  },
  handleSaveButtonClick: function () {
    const formElement = document.forms['Book'];
    const book = {
      isbn: formElement.isbn.value,
      title: formElement.title.value,
      year: formElement.year.value,
      author: formElement.author.value,
    };

    Book.create(book);
    formElement.reset();
  },
};
