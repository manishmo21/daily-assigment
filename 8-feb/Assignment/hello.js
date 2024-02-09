// Book object constructor
function Book(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isBorrowed = false; // Default value is false
  }
  
  // Library array to store all book objects
  let library = [];
  
  // Function to add a new book to the library
  function addBook(id, title, author) {
    const newBook = new Book(id, title, author);
    library.push(newBook);
  }
  
  // Function to borrow a book
  function borrowBook(id) {
    const book = library.find(book => book.id === id);
    if (book) {
      if (!book.isBorrowed) {
        book.isBorrowed = true;
        console.log(`Book "${book.title}" by ${book.author} is successfully borrowed.`);
      } else {
        console.log(`Book "${book.title}" by ${book.author} is not available for borrowing.`);
      }
    } else {
      console.log("Book not found in the library.");
    }
  }
  
  // Function to return a borrowed book
  function returnBook(id) {
    const book = library.find(book => book.id === id);
    if (book) {
      book.isBorrowed = false;
      console.log(`Book "${book.title}" by ${book.author} is successfully returned.`);
    } else {
      console.log("Book not found in the library.");
    }
  }
  
  // Function to list available books
  function listAvailableBooks() {
    console.log("Available Books:");
    library.forEach(book => {
      if (!book.isBorrowed) {
        console.log(`- "${book.title}" by ${book.author}`);
      }
    });
  }
  
  // Function to search for a book by its title
  function searchBook(title) {
    return library.find(book => book.title === title) || null;
  }
  
  // Example usage:
  
  addBook(1, " PHYSICS ", " JOHN ");
  addBook(2, " CHEMISTRY ", " JACK ");
  addBook(3, " MATHS ", " ALEX ");
  
  borrowBook(1);
  borrowBook(2);
  borrowBook(2); // Already borrowed
  returnBook(1);
  
  listAvailableBooks();
  
  console.log(searchBook("PHYSICS")); // Book not found

















