import { expect } from 'chai';
import { BasicItem } from '../app/basic-item';

describe('Basic Item', function() {
  it('should throw error if not implement', function() {
    class TestItem extends BasicItem {
      updateSellIn(): void {
        return;
      }
      isEditable = true;
    }

    const item = new TestItem('test item', 0, 0);

    expect(item.updateQuality.bind(item)).to.throw('not implements');
    expect(item.normalizeQuality.bind(item)).to.throw('not implements');
  });

  it('should be safe if not editable', function() {
    class TestItem extends BasicItem {
      updateSellIn(): void {
        return;
      }
      isEditable = false;
    }

    const item = new TestItem('test item', 0, 0);

    expect(item.updateQuality.bind(item)).not.to.throw('not implements');
    expect(item.normalizeQuality.bind(item)).not.to.throw('not implements');
  });
});
