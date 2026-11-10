const myLibrary = [];

const addButton = document.querySelector(".Add");
const formSection = document.querySelector(".formm");
const cards = document.querySelector(".library");
const closeButton = document.querySelector(".closeForm");
const form = document.querySelector("form");

closeButton.addEventListener("click", () => {
    formSection.style.display = "none";
});

addButton.addEventListener("click", () => {
    formSection.style.display = "flex";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addBookToLibrary();

    form.reset();
    formSection.style.display = "none";
});

function createBookCard(book) {
    const card = document.createElement("div");
    const bookName = document.createElement("p");
    const authorName = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    const removeButton = document.createElement("button");

    card.classList.add("bookCard");
    removeButton.classList.add("removeButton");

    bookName.textContent = `Book Name: ${book.bookName}`;
    authorName.textContent = `Author: ${book.author}`;
    pages.textContent = `Pages: ${book.pages}`;
    read.textContent = `Read?: ${book.read}`;

    removeButton.textContent = "x";

    removeButton.addEventListener("click", () => {
        const index = myLibrary.findIndex((item) => item.id === book.id);

        myLibrary.splice(index, 1);
        card.remove();
    });

    card.appendChild(removeButton);
    card.appendChild(bookName);
    card.appendChild(authorName);
    card.appendChild(pages);
    card.appendChild(read);

    cards.appendChild(card);
}

function Book(id, bookName, author, pages, read) {
    this.id = id;
    this.bookName = bookName;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const formData = new FormData(form);

    const id = crypto.randomUUID();
    const bookName = formData.get("book_name");
    const author = formData.get("author_name");
    const pages = Number(formData.get("pages"));
    const read = formData.get("read");

    const newBook = new Book(id, bookName, author, pages, read);

    myLibrary.push(newBook);

    createBookCard(newBook);
}
