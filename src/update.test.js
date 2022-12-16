/**
 * @jest-environment jsdom
 */

import { clearCompleted, updateArr, updateCompleted } from './update.js';

describe('Test clear completed function', () => {
  test('Clearing completed', () => {
    let testArr = [
      { description: 'Default', completed: true, index: 1 },
      { description: 'two', completed: false, index: 2 },
      { description: 'three', completed: true, index: 3 },
      { description: 'four', completed: false, index: 4 },
      { description: 'five', completed: true, index: 5 },
      { description: 'six', completed: false, index: 6 },
    ];
    testArr = clearCompleted(testArr);
    expect(testArr.length).toBe(3);
    expect(testArr).toHaveLength(3);
    expect(testArr[0].completed).toBe(false);
    expect(testArr[1].completed).toBe(false);
    expect(testArr[2].completed).toBe(false);
    expect(testArr[3]).toBeUndefined();
  });
});

describe('Test edit the update description array function', () => {
  const arr = [
    { description: 'Default', completed: true, index: 1 },
    { description: 'two', completed: false, index: 2 },
    { description: 'three', completed: true, index: 3 },
    { description: 'four', completed: false, index: 4 },
    { description: 'five', completed: true, index: 5 },
    { description: 'six', completed: false, index: 6 },
  ];
  test("Eiting the first element's description", () => {
    expect(arr[0].description).toEqual('Default');
    updateArr(1, 'EDITED TASK', arr);
    expect(arr[0].description).toEqual('EDITED TASK');
  });
  test('Eiting again', () => {
    expect(arr[0].description).toEqual('EDITED TASK');
    updateArr(1, 'Default-2', arr);
    expect(arr[0].description).toEqual('Default-2');
  });
});

describe('Test edit the update completed array function', () => {
  const arr = [
    { description: 'Default', completed: true, index: 1 },
    { description: 'two', completed: false, index: 2 },
    { description: 'three', completed: true, index: 3 },
    { description: 'four', completed: false, index: 4 },
    { description: 'five', completed: true, index: 5 },
    { description: 'six', completed: false, index: 6 },
  ];
  test("Eiting the first element's status", () => {
    expect(arr[1].completed).toEqual(false);
    updateCompleted(2, arr, true);
    expect(arr[1].completed).toEqual(true);
  });
  test('Eiting again', () => {
    expect(arr[0].completed).toBeTruthy();
    updateCompleted(1, arr, false);
    expect(arr[0].completed).toBeFalsy();
  });
  test('Eiting again', () => {
    expect(arr[0].completed).toBe(false);
    updateCompleted(1, arr, true);
    expect(arr[0].completed).not.toBeFalsy();
  });
});
