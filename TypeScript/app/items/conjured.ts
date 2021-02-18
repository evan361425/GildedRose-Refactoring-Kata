import { NormalItem } from './normal-item';

export class Conjured extends NormalItem {
  updateQuality(): void {
    this.quality -= this.sellIn < 0 ? 4 : 2;
  }
}
