import './style.css';
import { add } from './crud.js';

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
    // const img = document.createElement("i");
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
  // ul.innerHTML = "";
  // for (let i = 0; i < tasksArr.length; i += 1) {
  const li = document.createElement('li');
  const check = document.createElement('input');
  const lbl = document.createElement('label');
  img = document.createElement('i');
  check.type = 'checkbox';
  // check.name = tasksArr[tasksArr.length].index.toString();
  img.className = 'fa-solid fa-trash-can fa-xs';
  ul.append(li);
  li.append(lbl, img);
  lbl.append(check);
  lbl.innerHTML += tasksArr[i - 1].description;
  // }
};

window.addEventListener('load', () => {
  if (!ul.innerText) {
    sortArr();
    generateList();
  }
});

const input = document.getElementById('new-item');
// console.log(input);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && input.value) {
    add(input.value, tasksArr);
    input.value = '';
    appendList(tasksArr.length);
    // remove(0, tasksArr);
  }
});

const enterIcon = document.querySelector('.fa-arrow-turn-down');
enterIcon.addEventListener('click', () => {
  if (input.value) {
    add(input.value, tasksArr);
    input.value = '';
    appendList(tasksArr.length);
  }
});

const refreshIcon = document.querySelector('.fa-arrows-rotate');
// console.log(refreshIcon);
if (refreshIcon) {
  refreshIcon.addEventListener('click', () => {
    // console.log("refresh");
  });
}

img.addEventListener('click', () => {
  // console.log(tasksArr);
  // console.log(img.parentNode);
  // remove(img.key, tasksArr);
});
