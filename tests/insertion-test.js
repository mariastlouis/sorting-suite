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
  })  

});
