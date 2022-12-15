import { addToArr, removeFromArr } from './crud.js';

const arr = [1];

describe('Test add to array function', () => {
  test('Adding a new element at 1', () => {
    addToArr('newTask1', arr);
    expect(arr).toHaveLength(2);
  });

  test('Adding a new element at 2', () => {
    addToArr('newTask2', arr);
    expect(arr).toHaveLength(3);
  });

  test('Adding a new element at 3', () => {
    addToArr('newTask3', arr);
    expect(arr[3].index).toBe(4);
  });

  test('Adding a new element at 4', () => {
    addToArr('New text', arr);
    expect(arr[4].description).toBe('New text');
  });
  test('Adding a new element at 5', () => {
    addToArr('newTask5', arr);
    expect(arr[3].completed).toBe(false);
  });
});

describe('Test Remove from array function', () => {
  test('Removing the 6th element', () => {
    removeFromArr(6, arr);
    expect(arr).toHaveLength(5);
  });
  test('Removing the 3 elements', () => {
    for (let index = 2; index <= 4; index += 1) {
      removeFromArr(index, arr);
    }
    expect(arr).toHaveLength(3);
  });
  test('Removing the 3rd element', () => {
    removeFromArr(3, arr);
    expect(arr).toHaveLength(2);
  });
  test('Removing the 2nd element', () => {
    removeFromArr(2, arr);
    expect(arr[arr.length - 1]).toBe(1);
  });
  test('Removing the last element', () => {
    removeFromArr(1, arr);
    expect(arr.length).toBe(0);
  });
});
