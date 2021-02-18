import { NormalItem } from './normal-item';

export class BackstagePass extends NormalItem {
  updateQuality(): void {
    if (this.sellIn < 0) {
      this.quality = 0;
    } else if (this.sellIn > 10) {
      this.quality += 1;
    } else if (this.sellIn > 5) {
      this.quality += 2;
    } else {
      this.quality += 3;
    }
  }
}
