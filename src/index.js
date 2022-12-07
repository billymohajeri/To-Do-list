import './style.css';
import {
  addToArr, removeFromArr, saveToLocal, updateArr,
} from './crud.js';

let tasksArr = JSON.parse(localStorage.getItem('myList'));

let del = document.createElement('i');
let edt = document.createElement('i');
let sav = document.createElement('i');

const ul = document.querySelector('.list-container');

const sortArr = () => {
  tasksArr.sort((a, b) => a.index - b.index);
};
const generateList = () => {
  ul.innerHTML = '';
  for (let i = 0; i < tasksArr.length; i += 1) {
    const li = document.createElement('li');
    const check = document.createElement('input');
    const txt = document.createElement('label');
    del = document.createElement('i');
    edt = document.createElement('i');
    sav = document.createElement('i');
    check.type = 'checkbox';
    check.name = tasksArr[i].index.toString();
    del.className = 'fa-solid fa-trash-can fa-xs';
    edt.className = 'fa-regular fa-pen-to-square fa-xs';
    sav.className = 'fa-regular fa-floppy-disk fa-xs';
    sav.style.display = 'none';
    ul.append(li);
    li.append(txt, del, edt, sav);
    txt.append(check);
    txt.innerHTML += tasksArr[i].description;
  }
};

const appendList = (i) => {
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
  del.className = 'fa-solid fa-trash-can fa-xs';
  edt.className = 'fa-regular fa-pen-to-square fa-xs';
  sav.className = 'fa-regular fa-floppy-disk fa-xs';
  sav.style.display = 'none';
  ul.append(li);
  li.append(check, txt, del, edt, sav);
  txt.value += tasksArr[i - 1].description;
};

window.addEventListener('load', () => {
  if (!ul.innerText) {
    sortArr();
    generateList();
  }
});

const input = document.getElementById('new-item');
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && input.value) {
    addToArr(input.value, tasksArr);
    input.value = '';
    appendList(tasksArr.length);
  }
});

const enterIcon = document.querySelector('.fa-arrow-turn-down');
enterIcon.addEventListener('click', () => {
  if (input.value) {
    addToArr(input.value, tasksArr);
    input.value = '';
    appendList(tasksArr.length);
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
  if (editTextBox.value) {
    e.target.style.display = 'none';

    e.target.previousElementSibling.style.display = 'block';
    const delElementDOM = document.getElementsByClassName('todo-li-elements');
    const delElementArr = e.target.parentNode;
    let elementID;
    for (let j = 0; j < delElementDOM.length; j += 1) {
      if (delElementDOM[j] === delElementArr) {
        elementID = j + 1;
      }
    }
    updateArr(elementID, editTextBox.value, tasksArr);
    editTextBox.readOnly = true;
  }
};

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

const clearList = document.querySelector('.clear');
clearList.addEventListener('click', () => {
  tasksArr = [];
  saveToLocal(tasksArr);
  generateList();
});
