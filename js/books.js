/*List of books*/
const myLibrary = [];

$(document).ready(function(){
  $("button").addEventListener("click", addBookToLibrary('Harry Potter','J.K Rowling', 125, true));

});

function show(){
for (let key in myLibrary){
	let title = myLibrary[key].title;
	
	console.log(title);
}
}

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
		$("#librarybody tbody").append("<tr>" +
		    "<td>" + newBook.title + "</td>" + 
			"<td>" + newBook.author + "</td>" +
			"<td>" + newBook.numOfPages + "</td>" +
			"<td>" + newBook.read_status + "</td>" +
		    "</tr>");
	 	myLibrary.push(newBook);
		console.log(myLibrary);
	
}

/* Display books from array */
function showBookLib(){
 
}

addBookToLibrary('Harry Potter', 'J.K Rowling', 135, true);
addBookToLibrary('Lesson In Chemistry', 'J.R', 90, true);

show();
//console.log(myLibrary);