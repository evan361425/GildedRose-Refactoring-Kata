import { Item } from './item';
import { AgedBrie } from './items/aged-brie';
import { BackstagePass } from './items/backstage-pass';
import { BasicItem } from './basic-item';
import { Conjured } from './items/conjured';
import { NormalItem } from './items/normal-item';
import { LegendaryItem } from './items/legendary';

export class ClassifyItems {
  static readonly legendaryItem = 'Sulfuras, Hand of Ragnaros';

  static classify(items: Item[]): BasicItem[] {
    return items.map<BasicItem>((item) => {
      if (item.name === this.legendaryItem) {
        return buildFromItem(LegendaryItem, item);
      }

      this.normalizeItem(item);

      if (item.name === 'Aged Brie') {
        return buildFromItem(AgedBrie, item);
      }

      if (item.name.startsWith('Backstage pass')) {
        return buildFromItem(BackstagePass, item);
      }

      if (item.name.startsWith('Conjured')) {
        return buildFromItem(Conjured, item);
      }

      return buildFromItem(NormalItem, item);
    });
  }

  static normalizeItem(item: Item): void {
    if (item.quality > 50) item.quality = 50;
    else if (item.quality < 0) item.quality = 0;
  }
}

interface ItemConstructable {
  new(name: string, sellIn: number, quality: number): BasicItem;
}

function buildFromItem(MyItem: ItemConstructable, item: Item): BasicItem {
  return new MyItem(item.name, item.sellIn, item.quality);
}
