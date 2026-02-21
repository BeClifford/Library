const library = [];

// Book Constructor
function Book (title, author, pages, read) {
    if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = generateID();
    this.title = title; 
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// ID Generator
function generateID() {
        return crypto.randomUUID();
};

// Create book object
const bookSubmit = document.getElementById("createBtn");
bookSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
    // closeModal();

    // document.querySelector(".form").reset();

})


// Add Book to Library
function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("readStatus").value;

    const newBook = new Book(title, author, pages, read);
    library.push(newBook);
    displayBooks();
};

// Display Books 
function displayBooks() {
    // 1. Select the element first
    const bookShelf = document.querySelector(".bookshelf");
    
    // 2. Clear it on a separate line
    bookShelf.innerHTML = "";

    // 3. Use forEach (since you aren't creating a new array, just performing actions)
    library.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.className = "book__item";
        
        // // Add a data-id attribute so you can find this book later!
        // bookCard.setAttribute('data-id', book.id); 

        bookCard.innerHTML = `
            <p><b>Title:</b> ${book.title}</p>
            <p><b>Author:</b> ${book.author}</p>
            <p><b>Pages:</b> ${book.pages}</p>
            <p><b>Status:</b> ${book.read ? "Read ✅" : "Not Read ❌"}</p>
        `;

        bookShelf.appendChild(bookCard);
    });
}



// Dialog Functionality
const addBookButton = document.getElementById('addBookBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

addBookButton.addEventListener('click', () => {
    openModal();
});

closeModalBtn.addEventListener('click', () => {
    closeModal();
});

const openModal = () => {
    const modal = document.getElementById('modal');
    modal.showModal();
}
const closeModal = (event) => {
    const modal = document.getElementById('modal');
    modal.close();
}

