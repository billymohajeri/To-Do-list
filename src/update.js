import { saveToLocal, reorder } from './crud.js';

export const updateCompleted = (index, arr, status) => {
  arr[index - 1].completed = status;
  saveToLocal(arr);
};

export const updateArr = (index, newVal, arr) => {
  arr[index - 1].description = newVal;
  saveToLocal(arr);
};

export const clearCompleted = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].completed) {
      arr.splice(i, 1);
    }
  }
  reorder(arr);
};
