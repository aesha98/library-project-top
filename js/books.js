/*List of books*/
const myLibrary = [];

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
}