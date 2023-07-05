/* eslint-disable max-classes-per-file */

const booksLink = document.getElementById('books-link');
const addBookLink = document.getElementById('add-book-link');
const contactLink = document.getElementById('contact-link');
const booksSection = document.getElementById('books-section');
const addBookSection = document.getElementById('add-book-section');
const contactSection = document.getElementById('contact-section');
const addBookForm = document.getElementById('add-book-form');
const booksList = document.getElementById('books-list');

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

function handleFormSubmit(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const genre = document.getElementById('genre').value;
  const year = document.getElementById('year').value;

  const bookElement = document.createElement('div');
  bookElement.classList.add('book');
  bookElement.innerHTML = `
    <h3>${title}</h3>
    <p>Author: ${author}</p>
    <p>Genre: ${genre}</p>
    <p>Year: ${year}</p>
    <button class="remove-button">Remove</button>
  `;

  booksList.appendChild(bookElement);

  addBookForm.reset();

  const removeButton = bookElement.querySelector('.remove-button');
  removeButton.addEventListener('click', () => {
    bookElement.remove();
  });
}

booksLink.addEventListener('click', showBooksSection);
addBookLink.addEventListener('click', showAddBookSection);
contactLink.addEventListener('click', showContactSection);
addBookForm.addEventListener('submit', handleFormSubmit);

showBooksSection();
