const myLibrary = [];

const addButton = document.querySelector(".Add")
const formSection = document.querySelector(".formm")


addButton.addEventListener("click", () => {
   formSection.style.display = "flex";
})


const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
// });


function Book(bookName, AuthorName, pages, read){
    this.bookk = bookName;
    this.author = AuthorName;
    this.pages = pages;
    this.read = read;
}