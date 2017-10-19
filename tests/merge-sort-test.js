import { assert } from 'chai';
import { expect } from 'chai';
import mergeSort from '../scripts/merge-sort.js'
// import merge from '../scripts/merge-sort.js'
import randomNumberArray from '../scripts/randomNumberArray.js'

describe('TDD with mergeSort', () => {
  it('should be a function', () => {
    assert.isFunction(mergeSort);
  });

   it('should sort an array with 2 items', () => {
    let newArray = randomNumberArray(20, 50);
    let sortedArray = mergeSort(newArray);
    for (let i = 0; i < sortedArray.length-1; i++) {
      expect(sortedArray[i] < sortedArray[i+1], true);
    }
  });

  it('should sort an array with 1500 items', () => {
    let newArray = randomNumberArray(1500, 1500);
    let sortedArray = mergeSort(newArray);

    for (let i = 0; i < sortedArray.length-1; i++) {
      expect(sortedArray[i] < sortedArray[i+1], true);
    }
  });

  it('Should sort an array with 5500 items', () => {
    let newArray = randomNumberArray(5500, 5500);
    let sortedArray = mergeSort(newArray);
    
    for(let i = 0; i<sortedArray.length; i++){
    expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('should sort an array with 50000 items', () => {
    let newArray = randomNumberArray(50000, 50000);
    let sortedArray = mergeSort(newArray);

    for (let i = 0; i < sortedArray.length-1; i++) {
      expect(sortedArray[i] < sortedArray[i+1], true);
    }
  });

  it('should sort an array with 100,000 items', () => {
    let newArray = randomNumberArray(100000, 100000);
    let sortedArray = mergeSort(newArray);

    for (let i = 0; i < sortedArray.length-1; i++) {
      expect(sortedArray[i] < sortedArray[i+1], true);
    }
  });



 });
