export const saveToLocal = (arr) => {
  localStorage.setItem('myList', JSON.stringify(arr));
};

export const reorder = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].index = i + 1;
  }
  saveToLocal(arr);
};

export const addToArr = (val, arr) => {
  arr.push({
    description: val,
    completed: false,
    index: arr.length + 1,
  });
  reorder(arr);
};

export const appendList = (i, arr) => {
  const ul = document.querySelector('.list-container');

  const li = document.createElement('li');
  li.className = 'todo-li-elements';
  const check = document.createElement('input');
  const txt = document.createElement('input');
  txt.type = 'text';
  txt.className = 'text-box';
  txt.readOnly = true;
  const del = document.createElement('i');
  const edt = document.createElement('i');
  const sav = document.createElement('i');
  check.type = 'checkbox';
  check.className = 'checkbox';
  del.className = 'fa-solid fa-trash-can fa-xs';
  edt.className = 'fa-regular fa-pen-to-square fa-xs';
  sav.className = 'fa-regular fa-floppy-disk fa-xs';
  sav.style.display = 'none';
  ul.append(li);
  li.append(check, txt, del, edt, sav);
  txt.value += arr[i - 1].description;
};

export const removeFromArr = (index, arr) => {
  arr.splice(index - 1, 1);
  reorder(arr);
};
