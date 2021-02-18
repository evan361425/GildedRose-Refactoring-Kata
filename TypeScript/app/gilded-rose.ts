import { ClassifyItems } from './classifier';
import { Item } from './item';
import { BasicItem } from './basic-item';

export class GildedRose {
  readonly items: BasicItem[];

  constructor(items: Item[] = []) {
    this.items = ClassifyItems.classify(items);
  }

  updateQuality(): Item[] {
    this.items.forEach((item) => {
      item.updateSellIn();
      if (item.isEditable) {
        item.updateQuality();
        item.normalizeQuality();
      }
    });

    return this.items;
  }
}
