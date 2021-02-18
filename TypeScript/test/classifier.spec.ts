import { expect } from 'chai';
import { ClassifyItems } from '../app/classifier';
import { Item } from '../app/item';

describe('Classifier', function() {
  it('should normalize maximum', function() {
    // Arrange
    const item = new Item('foo', 10, 55);
    // Action
    const items = ClassifyItems.classify([item]);
    // Assertion
    expect(items[0].quality).to.eq(50);
  });

  it('should normalize minimum', function() {
    // Arrange
    const item = new Item('foo', 10, -5);
    // Action
    const items = ClassifyItems.classify([item]);
    // Assertion
    expect(items[0].quality).to.eq(0);
  });
});
