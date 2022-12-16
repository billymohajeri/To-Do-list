/**
 * @jest-environment jsdom
 */

import { clearCompleted, updateArr, updateCompleted } from './update.js';

const arr = [
  { description: 'Default', completed: false, index: 1 },
  { description: 'two', completed: true, index: 2 },
  { description: 'three', completed: false, index: 3 },
  { description: 'four', completed: true, index: 4 },
  { description: 'five', completed: false, index: 5 },
];

describe('Test clear completed function', () => {
  test('Clearing completed', () => {
    expect(arr[1].completed).toBe(true);
    clearCompleted(arr);
    expect(arr).toHaveLength(3);
    expect(arr[0].completed).toBe(false);
    expect(arr[1].completed).toBe(false);
    expect(arr[2].completed).toBe(false);
  });
});

describe('Test edit the update description array function', () => {
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
  test("Eiting the first element's status", () => {
    expect(arr[0].completed).toEqual(false);
    updateCompleted(1, arr, true);
    expect(arr[0].completed).toEqual(true);
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
