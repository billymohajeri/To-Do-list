import { saveToLocal } from './crud.js';

const updateCompleted = (index, arr, status) => {
  arr[index - 1].completed = status;
  saveToLocal(arr);
};

export default updateCompleted;
