import { Item } from './item';

export abstract class BasicItem extends Item {
  abstract updateSellIn(): void;
  abstract isEditable: boolean;

  updateQuality(): void {
    if (this.isEditable) {
      throw Error('not implements');
    }
  }

  normalizeQuality(): void {
    if (this.isEditable) {
      throw Error('not implements');
    }
  }
}
