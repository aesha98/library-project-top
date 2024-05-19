/*List of books*/
const myLibrary = [];

document.querySelector("button").addEventListener("click",function() {
	 addBookToLibrary('Jarry Potter', 'J.K Rowling', 135, true);
	 console.log(myLibrary);
});


/* constructor */
function Book(title, author, numOfPages, read_status) {
	this.title = title;
	this.author = author;
	this.numOfPages = numOfPages;
	this.read_status = read_status;
}

/* Insert new 'Book' to library*/
function addBookToLibrary(title, author, numOfPages, read_status) {
	let newBook = new Book(title, author, numOfPages, read_status);
	myLibrary.push(newBook);
	return newBook;
}

addBookToLibrary('Harry Potter', 'J.K Rowling', 135, true);
addBookToLibrary('Lesson In Chemistry', 'J.R', 90, true);

console.log(myLibrary);