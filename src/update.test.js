/**
 * @jest-environment jsdom
 */

import { updateArr } from './crud.js';

const arr = [];

describe('Test add to array function', () => {
  test('Adding a new element at 1', () => {
    addToArr('newTask1', arr);
    expect(arr).toHaveLength(1);
  });

  test('Adding a new element at 2', () => {
    addToArr('newTask2', arr);
    expect(arr).toHaveLength(2);
  });

  test('Adding a new element at 3', () => {
    addToArr('newTask3', arr);
    expect(arr[2].index).toBe(3);
  });

  test('Adding a new element at 4', () => {
    addToArr('New text', arr);
    expect(arr[3].description).toBe('New text');
  });
  test('Adding a new element at 5', () => {
    addToArr('newTask5', arr);
    expect(arr[4].completed).toBe(false);
  });
});

describe('Test add to DOM function', () => {
  test('Adding a li element to ul', () => {
    document.body.innerHTML = "<ul class='list-container'></ul>";
    appendList(1, arr);
    const items = document.querySelectorAll('li');
    expect(items).toHaveLength(1);
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
    expect(arr[0].description).toBe('newTask1');
  });
  test('Removing the last element', () => {
    removeFromArr(1, arr);
    expect(arr.length).toBe(0);
  });
});
