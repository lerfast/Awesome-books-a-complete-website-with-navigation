// DOM elements
const booksLink = document.getElementById('books-link');
const addBookLink = document.getElementById('add-book-link');
const contactLink = document.getElementById('contact-link');
const booksSection = document.getElementById('books-section');
const addBookSection = document.getElementById('add-book-section');
const contactSection = document.getElementById('contact-section');
const addBookForm = document.getElementById('add-book-form');
const booksList = document.getElementById('books-list');

// Event listeners
booksLink.addEventListener('click', showBooksSection);
addBookLink.addEventListener('click', showAddBookSection);
contactLink.addEventListener('click', showContactSection);
addBookForm.addEventListener('submit', handleFormSubmit);

// Functions to show or hide sections
function showBooksSection() {
  booksSection.style.display = 'block';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
}

function showAddBookSection() {
  booksSection.style.display = 'none';
  addBookSection.style.display = 'block';
  contactSection.style.display = 'none';
}

function showContactSection() {
  booksSection.style.display = 'none';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'block';
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Access form input values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const genre = document.getElementById('genre').value;
  const year = document.getElementById('year').value;

  // Create a new book element
  const bookElement = document.createElement('div');
  bookElement.classList.add('book');
  bookElement.innerHTML = `
    <h3>${title}</h3>
    <p>Author: ${author}</p>
    <p>Genre: ${genre}</p>
    <p>Year: ${year}</p>
    <button class="remove-button">Remove</button>
  `;

  // Append the new book element to the books list
  booksList.appendChild(bookElement);

  // Clear form inputs after submission
  addBookForm.reset();

  // Add event listener to the remove button
  const removeButton = bookElement.querySelector('.remove-button');
  removeButton.addEventListener('click', () => {
    bookElement.remove();
  });
}

// Initial section to display
showBooksSection();
