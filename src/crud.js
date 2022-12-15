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
  // reorder(arr);
};

export const removeFromArr = (index, arr) => {
  arr.splice(index - 1, 1);
  // reorder(arr);
};

export const updateArr = (index, newVal, arr) => {
  arr[index - 1].description = newVal;
  saveToLocal(arr);
};
