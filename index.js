import { DateTime } from './modules/luxon.js';
import Books from './modules/book.js';
import showAdd from './modules/add.js';
import showList from './modules/list.js';
import showContact from './modules/contact.js';

const titles = document.getElementById('title');
const authors = document.getElementById('author');
const add = document.getElementById('add');

const now = DateTime.now();

let suffix;
if (now.day % 10 === 1 && now.day !== 11) suffix = 'st';
else if (now.day % 10 === 2 && now.day !== 12) suffix = 'nd';
else if (now.day % 10 === 3 && now.day !== 13) suffix = 'rd';
else suffix = 'th';
const time = `${now.monthLong} ${now.day}${suffix} ${
  now.year
}, ${now.toLocaleString(DateTime.TIME_WITH_SECONDS)}`;
document.querySelector('.time').innerHTML = `<h4>${time}</h4>`;

const book = new Books(titles.value, authors.value);

book.showBooks();

add.addEventListener('click', () => {
  book.book.title = titles.value;
  book.book.author = authors.value;
  book.book.id = book.allBooks.length + 1;
  if (book.book.title && book.book.author) {
    book.add();
  }
});

const listLi = document.getElementById('list-li');
const addLi = document.getElementById('add-li');
const contactLi = document.getElementById('contact-li');

listLi.addEventListener('click', showList);
addLi.addEventListener('click', showAdd);
contactLi.addEventListener('click', showContact);
