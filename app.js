let myLibrary = JSON.parse(localStorage.getItem("myLibrary") || "[]");

const bookContainer = document.getElementById('bookListContain');
const bookNameForm = document.getElementById('bookName');
const bookAuthorForm = document.getElementById('bookAuthor');
const bookPagesForm = document.getElementById('bookPages');
const bookReadForm = document.getElementById('readStatus');

const addBookBtn = document.getElementById('addBookBtn');
addBookBtn.addEventListener('click', addBookToLibrary);

var bookListItemDeleteBtn = document.querySelectorAll('.deleteBtn');
for (let i = 0; i < bookListItemDeleteBtn.length; i++) {
    bookListItemDeleteBtn[i].addEventListener('click', removeBook);
}

const book1 = new Book('Title', 'author', 'page numba', true);
const book2 = new Book('Title2', 'author2', 'page numba2', false);

function Book(title, author, pages, read) {
this.title = title
this.author = author
this.pages = pages
this.read = read
}


document.addEventListener('click', function(e){

    if (e.target.classList.contains('bookCheckBox')){
        myLibrary[e.target.dataset.bookid].read = !myLibrary[e.target.dataset.bookid].read;
        localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
        
    }
    render(myLibrary);
});

function addBookToLibrary() {
var bookTitle = bookNameForm.value;
var bookAuthor = bookAuthorForm.value;
var bookPages = bookPagesForm.value;
var bookRead = bookReadForm.checked;

myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, bookRead, bookID));
localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
render(myLibrary);
}

function removeBook(){
myLibrary.splice(this.id, 1);
console.log(myLibrary);
this.parentNode.remove(this);
localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
render(myLibrary);

}

//Renders through whole library array:
function render(arr) {
    bookContainer.innerHTML = '';
    //loops through array and displays each book onto HTML page.
    arr.forEach(function(item, book){
    
    //  List item
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

    var bookListItemCheckBox = document.createElement('input');
    bookListItemCheckBox.type = 'checkbox';
    bookListItemCheckBox.className = 'bookCheckBox';
    bookListItemCheckBox.dataset.bookid = `${book}`;
    if (item.read === true) {
        bookListItemCheckBox.checked = true;
    } else {
        bookListItemCheckBox.checked = false; 
    }
    bookListItem.appendChild(bookListItemCheckBox);
    
    var bookListItemDeleteBtn = document.createElement('button');
    bookListItemDeleteBtn.innerText = 'remove';
    bookListItem.appendChild(bookListItemDeleteBtn);
    bookListItemDeleteBtn.className = 'deleteBtn';
    bookListItemDeleteBtn.id = `${book}`;
    bookListItemDeleteBtn.addEventListener('click', removeBook)
});

}

// Check if library items already exist
if (myLibrary.length >= 1) {
    render(myLibrary);
    }
