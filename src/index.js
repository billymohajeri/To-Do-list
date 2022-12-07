import './style.css';
import { addToArr, removeFromArr } from './crud.js';

const tasksArr = [];
let img = document.createElement('i');

const ul = document.querySelector('.list-container');

const sortArr = () => {
  tasksArr.sort((a, b) => a.index - b.index);
};
const generateList = () => {
  ul.innerHTML = '';
  for (let i = 0; i < tasksArr.length; i += 1) {
    const li = document.createElement('li');
    const check = document.createElement('input');
    const lbl = document.createElement('label');
    img = document.createElement('i');
    check.type = 'checkbox';
    check.name = tasksArr[i].index.toString();
    img.className = 'fa-solid fa-trash-can fa-xs';
    ul.append(li);
    li.append(lbl, img);
    lbl.append(check);
    lbl.innerHTML += tasksArr[i].description;
  }
};

const appendList = (i) => {
  const li = document.createElement('li');
  li.className = 'todo-li-elements';
  const check = document.createElement('input');
  const lbl = document.createElement('label');
  img = document.createElement('i');
  check.type = 'checkbox';
  img.className = 'fa-solid fa-trash-can fa-xs';
  ul.append(li);
  li.append(lbl, img);
  lbl.append(check);
  lbl.innerHTML += tasksArr[i - 1].description;
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
});
