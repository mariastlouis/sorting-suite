import { assert } from 'chai';
import { expect } from 'chai';
import quickSort from '../scripts/quicksort.js'
import randomNumberArray from '../scripts/randomNumberArray.js'

describe('TDD with quickSort', () => {
  it('should be a function', () => {
    assert.isFunction(quickSort);
  });


  it('should sort an array with 20 items', () => {
    let newArray = randomNumberArray(20, 50);
    let sortedArray = quickSort(newArray);
    for (let i = 0; i < sortedArray.length-1; i++) {
      expect(sortedArray[i] < sortedArray[i+1], true);
    }
  });

  it('should sort an array with 1500 items', () => {
    let newArray = randomNumberArray(1500, 1500);
    let sortedArray = quickSort(newArray);

    for (let i = 0; i < sortedArray.length-1; i++) {
      expect(sortedArray[i] < sortedArray[i+1], true);
    }
  });

  it('Should sort an array with 5500 items', () => {
    let newArray = randomNumberArray(5500, 5500);
    let sortedArray = quickSort(newArray);
    
    for(let i = 0; i<sortedArray.length; i++){
    expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('should sort an array with 15000 items', () => {
    let newArray = randomNumberArray(15000, 15000);
    let sortedArray = quickSort(newArray);

    for (let i = 0; i < sortedArray.length-1; i++) {
      expect(sortedArray[i] < sortedArray[i+1], true);
    }
  });

  it('should sort an array with 70000 items', () => {
    let newArray = randomNumberArray(70000, 70000);
    let sortedArray = quickSort(newArray);

    for (let i = 0; i < sortedArray.length-1; i++) {
      expect(sortedArray[i] < sortedArray[i+1], true);
    }
  });

});