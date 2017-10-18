import { assert } from 'chai';
import { expect } from 'chai';
import quickSort from '../scripts/quicksort.js'
import randomNumberArray from '../scripts/randomNumberArray.js'

describe('TDD with quickSort', () => {
  it('should be a function', () => {
    assert.isFunction(quickSort);
  });

});