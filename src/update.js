import { saveToLocal } from './crud.js';

const updateCompleted = (index, arr, status) => {
  arr[index - 1].completed = status;
  saveToLocal(arr);
};

export const updateArr = (index, newVal, arr) => {
  arr[index - 1].description = newVal;
  saveToLocal(arr);
  // localStorage.setItem('myList', JSON.stringify(arr));
};

export default updateCompleted;
