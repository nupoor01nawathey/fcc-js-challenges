// Book constructor
function Book (title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI construcor
function UI () {}

// proto method to add book to list
UI.prototype.addBookToList = function(book) {
    const tbody = document.getElementById("book-list");
    const tr = document.createElement("tr");
    tr.innerHTML =
        "<td>" + book.title + "</td>" +
        "<td>" + book.author + "</td>" +
        "<td>" + book.isbn + "</td>" +
        "<td><a href=\"#\" class=\"delete\">X</a></td>" ;
   tbody.appendChild(tr); 
}

// clear input fields once book is added to the list
UI.prototype.clearFields = function() {
    document.getElementById("title").value = "",
    document.getElementById("title").value = "",
    document.getElementById("title").value = "" ;
}

document.getElementById("book-form").addEventListener("submit", function(e) {
    const title = document.getElementById("title").value,
          author = document.getElementById("author").value,
          isbn = document.getElementById("isbn").value;

    const book = new Book(title, author, isbn);
    const ui = new UI();

    ui.addBookToList(book);
    ui.clearFields();

    e.preventDefault();
});