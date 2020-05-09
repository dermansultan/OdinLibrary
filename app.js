const book1 = new Book('Title', 'author', 'page numba', 'me no read');
const book2 = new Book('Title2', 'author2', 'page numba2', 'me no read2');

const bookContainer = document.getElementById('bookListContain');

let myLibrary = [book1, book2];

console.log(book1);

function Book(title, author, pages, read) {
this.title = title
this.author = author
this.pages = pages
this.read = read   
}

function addBookToLibrary() {
// adds book to library
}

function render(arr) {
    //loops through array and displays each book onto HTML page.
    arr.forEach(function(item){
    
    var bookListItem = document.createElement('li');
    bookListItem.className = 'bookListItem';
    bookContainer.appendChild(bookListItem);

    var bookListItemTitle = document.createElement('h2');
    bookListItemTitle.className = 'bookTitle';
    bookListItemTitle.innerText = `${item.title}`;
    bookListItem.appendChild(bookListItemTitle);

    var bookListItemAuthor = document.createElement('h3');
    bookListItemAuthor.className = 'bookAuthor';
    bookListItemAuthor.innerText = `${item.author}`;
    bookListItem.appendChild(bookListItemAuthor);

    
    var bookListItemPages = document.createElement('p');
    bookListItemPages.className = 'bookPages';
    bookListItemPages.innerText = `${item.pages}`;
    bookListItem.appendChild(bookListItemPages);
    
    var bookListItemRead = document.createElement('p');
    bookListItemRead.className = 'bookRead';
    bookListItemRead.innerText = `${item.read}`;
    bookListItem.appendChild(bookListItemRead);
    })
}

render(myLibrary);