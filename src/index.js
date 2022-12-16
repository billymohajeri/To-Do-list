import './style.css';
import {
  addToArr, appendList, removeFromArr, reorder,
} from './crud.js';
import { updateCompleted, updateArr, clearCompleted } from './update.js';

let tasksArr = [];
if (localStorage.getItem('myList') === 'undefined') {
  localStorage.clear();
}
if (localStorage.getItem('myList')) {
  tasksArr = JSON.parse(localStorage.getItem('myList'));
}

let del = document.createElement('i');
let edt = document.createElement('i');
let sav = document.createElement('i');

const ul = document.querySelector('.list-container');

const generateList = () => {
  if (localStorage.getItem('myList')) {
    tasksArr = JSON.parse(localStorage.getItem('myList'));
  }
  ul.innerHTML = '';
  if (tasksArr) {
    for (let i = 0; i < tasksArr.length; i += 1) {
      const li = document.createElement('li');
      li.className = 'todo-li-elements';
      const check = document.createElement('input');
      const txt = document.createElement('input');
      txt.type = 'text';
      txt.className = 'text-box';
      txt.readOnly = true;
      del = document.createElement('i');
      edt = document.createElement('i');
      sav = document.createElement('i');
      check.type = 'checkbox';
      check.className = 'checkbox';
      del.className = 'fa-solid fa-trash-can fa-xs';
      edt.className = 'fa-regular fa-pen-to-square fa-xs';
      sav.className = 'fa-regular fa-floppy-disk fa-xs';
      sav.style.display = 'none';
      ul.append(li);
      li.append(check, txt, del, edt, sav);
      txt.value += tasksArr[i].description;
      check.checked = tasksArr[i].completed;
    }
  }
};

//* ***************** */

// EventListener for page load ==================
window.addEventListener('load', () => {
  if (!ul.innerText) {
    generateList();
  }
});

const input = document.getElementById('new-item');
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && input.value) {
    addToArr(input.value, tasksArr);
    // ******************
    // reorder(tasksArr);
    input.value = '';
    appendList(tasksArr.length, tasksArr);
  }
});

const enterIcon = document.querySelector('.fa-arrow-turn-down');
enterIcon.addEventListener('click', () => {
  if (input.value) {
    addToArr(input.value, tasksArr);
    // ******************
    // reorder(tasksArr);
    input.value = '';
    appendList(tasksArr.length, tasksArr);
  }
});

const refreshIcon = document.querySelector('.fa-arrows-rotate');
if (refreshIcon) {
  refreshIcon.addEventListener('click', () => {
    generateList();
  });
}

const saveFunc = (e) => {
  const editTextBox = e.target.previousElementSibling.previousElementSibling
    .previousElementSibling;
  let elementID;
  if (editTextBox.value) {
    e.target.style.display = 'none';
    e.target.previousElementSibling.style.display = 'block';
    const delElementDOM = document.getElementsByClassName('todo-li-elements');
    const delElementArr = e.target.parentNode;
    for (let j = 0; j < delElementDOM.length; j += 1) {
      if (delElementDOM[j] === delElementArr) {
        elementID = j + 1;
      }
    }
    updateArr(elementID, editTextBox.value, tasksArr);
    editTextBox.readOnly = true;
  }
};

// EventListener for remove button ==================
document.addEventListener('click', (e) => {
  if (e.target.className === 'fa-solid fa-trash-can fa-xs') {
    const delElementDOM = document.getElementsByClassName('todo-li-elements');
    const delElementArr = e.target.parentNode;
    let elementID;
    for (let j = 0; j < delElementDOM.length; j += 1) {
      if (delElementDOM[j] === delElementArr) {
        elementID = j + 1;
      }
    }
    e.target.parentNode.remove();
    removeFromArr(elementID, tasksArr);
    // ******************
    reorder(tasksArr);
  }

  // Edit button ==================
  if (e.target.className === 'fa-regular fa-pen-to-square fa-xs') {
    e.target.nextElementSibling.style.display = 'block';
    e.target.style.display = 'none';
    const editTextBox = e.target.previousElementSibling.previousElementSibling;
    editTextBox.readOnly = false;
    editTextBox.focus();
  }

  // Save button ==================
  if (e.target.className === 'fa-regular fa-floppy-disk fa-xs') {
    saveFunc(e);
  }
});

// Clear completed ==================
const clearList = document.querySelector('.clear');
clearList.addEventListener('click', () => {
  clearCompleted(tasksArr);
  generateList();
});

// EventListener for check box ==================
document.addEventListener('change', (e) => {
  if (e.target.className === 'checkbox') {
    const edtElementDOM = document.getElementsByClassName('todo-li-elements');
    const edtElementArr = e.target.parentNode;
    let elementID;
    for (let j = 0; j < edtElementDOM.length; j += 1) {
      if (edtElementDOM[j] === edtElementArr) {
        elementID = j + 1;
      }
    }
    const status = e.target.checked;
    updateCompleted(elementID, tasksArr, status);
  }
});
