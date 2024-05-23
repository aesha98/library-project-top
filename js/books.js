const myLibrary = [
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "numOfPages": 180,
        "read_status": true
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "numOfPages": 281,
        "read_status": false
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "numOfPages": 328,
        "read_status": true
    },
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "numOfPages": 279,
        "read_status": false
    },
    {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "numOfPages": 214,
        "read_status": true
    },
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "numOfPages": 310,
        "read_status": true
    },
    {
        "title": "Moby Dick",
        "author": "Herman Melville",
        "numOfPages": 635,
        "read_status": false
    },
    {
        "title": "War and Peace",
        "author": "Leo Tolstoy",
        "numOfPages": 1225,
        "read_status": false
    },
    {
        "title": "The Odyssey",
        "author": "Homer",
        "numOfPages": 541,
        "read_status": true
    },
    {
        "title": "Crime and Punishment",
        "author": "Fyodor Dostoevsky",
        "numOfPages": 671,
        "read_status": false
    }
];

const btn = document.querySelector('button');
const tableBody = document.querySelector('tbody');

const clickbox = document.querySelector('#read_status');

clickbox.addEventListener("click",checboxClickEvent, false);

// Add a new book to the library when the button is clicked
btn.addEventListener("click", addBookToLibrary);

/* Constructor function for creating new book objects */
function Book(title, author, numOfPages, read_status) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read_status = read_status;
}

function checboxClickEvent(event){
    let warn = "preventDefault() won't let you check this!<br>";
    alert(warn);
    event.preventDefault();
}

/* Function to add a new book to the library */
function addBookToLibrary() {
    let title = document.getElementById('title').value;
    console.log(title);
    
    let author = document.getElementById('author').value;
    let numOfPages = document.getElementById('numOfpages').value;
    let read_status = document.getElementById('read_status').value;
    console.log(read_status);

    let newBook = new Book(title, author, numOfPages, read_status);
    myLibrary.push(newBook);
    showBookLib();
    console.log(myLibrary);
}

/* Function to display the books in the library */
function showBookLib() {
    // Clear the table before displaying the books
    tableBody.innerHTML = '';
    
    for (const book of myLibrary) {
        // Create a new table row for each book
        let trow = document.createElement('tr');

        // Create and populate cells with book data
        const title = trow.insertCell();
        title.textContent = book.title;

        const author = trow.insertCell();
        author.textContent = book.author;

        const numOfPages = trow.insertCell();
        numOfPages.textContent = book.numOfPages;

        const read_status = trow.insertCell();
        read_status.textContent = book.read_status ? 'Read' : 'Unread';

        // Append the row to the table body
        tableBody.appendChild(trow);
    }
}

// Initial call to display the existing library on page load
window.onload = showBookLib;