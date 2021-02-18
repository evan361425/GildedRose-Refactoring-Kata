import { BasicItem } from '../basic-item';

export class LegendaryItem extends BasicItem {
  // should never outdated
  updateSellIn(): void {
    this.sellIn = 0;
  }

  isEditable = false;
}
