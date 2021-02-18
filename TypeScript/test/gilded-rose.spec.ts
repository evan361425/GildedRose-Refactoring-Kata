import { expect } from 'chai';
import { GildedRose } from '../app/gilded-rose';
import { Item } from '../app/item';

describe('Gilded Rose', function() {
  it('should do nothing if give empty array', function() {
    const gildedRose = new GildedRose();

    const items = gildedRose.updateQuality();

    expect(items.length).to.equal(0);
  });

  it('should decrease quality correctly', function() {
    const gildedRose = new GildedRose([
      new Item('foo 1', 1, 30),
      new Item('foo 1', 0, 30),
      new Item('foo 2', 1, 0),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equal(29);
    expect(items[1].quality).to.equal(28);
    expect(items[2].quality).to.equal(0);
  });

  it('should downgrade twice fast on conjured item', function() {
    const gildedRose = new GildedRose([
      new Item('Conjured 1', 30, 5),
      new Item('Conjured 2', 0, 50),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equal(3);
    expect(items[1].quality).to.equal(46);
  });

  it('should increase quality correctly', function() {
    const gildedRose = new GildedRose([
      new Item('Aged Brie', 1, 50),
      new Item('Aged Brie', 0, 0),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equal(50);
    expect(items[1].quality).to.equal(1);
  });

  it('should increase quality on backstage ticket', function() {
    const gildedRose = new GildedRose([
      new Item('Backstage pass 1', 1, 30),
      new Item('Backstage pass 2', 5, 48),
      new Item('Backstage pass 2', 5, 49),
      new Item('Backstage pass 2', 8, 48),
      new Item('Backstage pass 2', 10, 49),
      new Item('Backstage pass 2', 15, 30),
      new Item('Backstage pass 1', 0, 50),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equal(33);
    expect(items[1].quality).to.equal(50);
    expect(items[2].quality).to.equal(50);
    expect(items[3].quality).to.equal(50);
    expect(items[4].quality).to.equal(50);
    expect(items[5].quality).to.equal(31);
    expect(items[6].quality).to.equal(0);
  });

  it('should not change legend item', function() {
    const gildedRose = new GildedRose([
      new Item('Sulfuras, Hand of Ragnaros', -1, 80),
      new Item('Sulfuras, Hand of Ragnaros', 0, 80),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equal(80);
    expect(items[0].sellIn).to.equal(0);
    expect(items[1].quality).to.equal(80);
    expect(items[1].sellIn).to.equal(0);
  });
});
