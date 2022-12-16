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
  arr = arr.filter((tasksArr) => !tasksArr.completed);
  reorder(arr);
  return arr;
};
