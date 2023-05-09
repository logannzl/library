const btnAddBook = document.querySelector(".btnAddBook");
const container = document.querySelector(".container");
const btnSubmit = document.querySelector(".btnSubmit");
let myLibrary = [];
let book1;

btnAddBook.addEventListener('click', () => {
  openForm();
});

btnSubmit.addEventListener('click', () => {
  event.preventDefault();
  addBookToLibrary();
});

function Book(title, author, pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  // do stuff here
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  myLibrary.forEach(Book => console.log(Book));
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
