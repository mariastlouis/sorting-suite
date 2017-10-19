import { assert } from 'chai';
import { expect } from 'chai';
import insertionSort from '../scripts/insertion-sort.js'
import randomNumberArray from '../scripts/randomNumberArray.js'

describe('TDD with insertionSort', () => {
  it('should be a function', () => {
    assert.isFunction(insertionSort);
  });


  it('should sort 2 items ', () => {
    let array = [ 5, 3 ]
    assert.equal(array[0] > array[1], true);
    insertionSort(array);
    assert.equal(array[0] < array[1], true);
  });


  it('should sort an array with 20 items', () => {
    let newArray = randomNumberArray(20, 50);
    let sortedArray = insertionSort(newArray);
    for (let i = 0; i < sortedArray.length-1; i++) {
      expect(sortedArray[i] < sortedArray[i+1], true);
    }
  });

    it('should sort an array with 1500 items', () => {
    let newArray = randomNumberArray(1500, 1500);
    let sortedArray = insertionSort(newArray);

    for (let i = 0; i < sortedArray.length-1; i++) {
      expect(sortedArray[i] < sortedArray[i+1], true);
    }
  });

    it('Should sort an array with 1000 items', () => {
    let newArray = randomNumberArray(10000, 10000);
    let sortedArray = insertionSort(newArray);
    
    for(let i = 0; i<sortedArray.length; i++){
    expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

    it('should sort an array with 20000 items', () => {
    let newArray = randomNumberArray(20000, 20000);
    let sortedArray = insertionSort(newArray);

    for (let i = 0; i < sortedArray.length-1; i++) {
      expect(sortedArray[i] < sortedArray[i+1], true);
    }
  });
  

});
