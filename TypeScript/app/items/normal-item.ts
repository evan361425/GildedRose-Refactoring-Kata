import { BasicItem } from '../basic-item';

export class NormalItem extends BasicItem {
  isEditable = true;

  updateSellIn(): void {
    this.sellIn--;
  }

  updateQuality(): void {
    this.quality -= this.sellIn < 0 ? 2 : 1;
  }

  normalizeQuality(): void {
    if (this.quality > 50) this.quality = 50;
    else if (this.quality < 0) this.quality = 0;
  }
}
