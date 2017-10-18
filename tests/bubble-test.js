import { assert } from 'chai';
import { expect } from 'chai';
import bubbleSort from '../scripts/bubble-sort.js'
import randomNumberArray from '../scripts/randomNumberArray.js'


describe('TDD with bubbleSort', () => {
  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  });


it('should sort 2 items ', () => {
    let array = [ 2, 1 ]
    assert.equal(array[0] > array[1], true);
    bubbleSort(array);
    assert.equal(array[0] < array[1], true);
  })

  it('should sort an array with 10 items', () => {
    let newArray = randomNumberArray(10, 30);
    let sortedArray = bubbleSort(newArray);
    for (let i = 0; i < sortedArray.length-1; i++) {
      expect(sortedArray[i] < sortedArray[i+1], true);
    }
  });

    it('should sort an array with 1000 items', () => {
    let newArray = randomNumberArray(1000, 1000);
    let sortedArray = bubbleSort(newArray);

    for (let i = 0; i < sortedArray.length-1; i++) {
      expect(sortedArray[i] < sortedArray[i+1], true);
    }
  });

     it('Should sort an array with 5000 items', () => {
    let newArray = randomNumberArray(5000, 5000);
    let sortedArray = bubbleSort(newArray);
    
    for(let i = 0; i<sortedArray.length; i++){
    expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

    it('should sort an array with 10000 items', () => {
    let newArray = randomNumberArray(10000, 10000);
    let sortedArray = bubbleSort(newArray);

    for (let i = 0; i < sortedArray.length-1; i++) {
      expect(sortedArray[i] < sortedArray[i+1], true);
    }
  });

 

  });