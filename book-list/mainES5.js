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

UI.prototype.showAlert = function(message, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const form = document.getElementById("book-form");
    const container = document.querySelector(".container");
    container.insertBefore(div, form);

    setTimeout(function() {
        document.querySelector(".alert").remove();
    }, 3000);

}

UI.prototype.deleteBook = function(target) {
    console.log('outside', target);
    if(target.className === "delete") {
        console.log('inside if')
        target.parentElement.parentElement.remove();
        const ui = new UI();
        ui.showAlert('Book Removed!', 'success');
    }
}


document.getElementById("book-form").addEventListener("submit", function(e) {
    const title = document.getElementById("title").value,
          author = document.getElementById("author").value,
          isbn = document.getElementById("isbn").value;

    const ui = new UI();

    if(title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        const book = new Book(title, author, isbn);

        ui.addBookToList(book);
        ui.clearFields();
    }
    e.preventDefault();
});


// event listener for delete
document.querySelector("#book-list").addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteBook(e.target);
    e.preventDefault();
});
