export const add = (val, arr) => {
  arr.push({
    description: val,
    completed: false,
    index: arr.length + 1,
  });
  //   console.log(arr);
};

export const remove = (index, arr) => {
  arr.splice(index, 1);
  //   reorder(arr);
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].index = i + 1;
  }
  //   console.log(arr);
};

// export default add;

export const reorder = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].index = i + 1;
  }
};
