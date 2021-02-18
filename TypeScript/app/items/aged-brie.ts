import { NormalItem } from './normal-item';

export class AgedBrie extends NormalItem {
  updateQuality(): void {
    this.quality += 1;
  }
}
