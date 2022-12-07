import './style.css';

const tasksArr = [];

const ul = document.querySelector('.list-container');

const sortArr = () => {
  tasksArr.sort((a, b) => a.index - b.index);
};
const generateList = () => {
  for (let i = 0; i < tasksArr.length; i += 1) {
    const li = document.createElement('li');
    const check = document.createElement('input');
    const lbl = document.createElement('label');
    check.type = 'checkbox';
    check.name = tasksArr[i].index.toString();
    ul.append(li);
    li.append(lbl);
    lbl.append(check);
    lbl.innerHTML += tasksArr[i].description;
  }
};

window.addEventListener('load', () => {
  if (!ul.innerText) {
    sortArr();
    generateList();
  }
});

const input = document.getElementById('new-item');
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (input.value !== '') {
      tasksArr.push({
        description: input.value,
        completed: false,
        index: tasksArr[tasksArr.length - 1].index + 1,
      });
      input.value = '';
    }
  }
});
