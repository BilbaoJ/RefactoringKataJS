const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", () => {

  test('Quality should degrades at the end of each day', () => { 
    const gildedRose = new Shop([new Item("product", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(49);
  });

  test('SellIn should degrades at the end of each day', () => { 
    const gildedRose = new Shop([new Item("product", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
  });

  test('Quality should degrades twice as fast when the item passed', () => { 
    const gildedRose = new Shop([new Item("product", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(48);
  });

  test('Quality should not be less than 0', () => { 
    const gildedRose = new Shop([new Item("product", 1, 0), new Item("product", 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[1].quality).toBe(0);
  });

  test('Quality should increases when the item is Aged Brie', () => { 
    const gildedRose = new Shop([new Item("Aged Brie", 10, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(41);
  });

  test('Quality should not be more than 50', () => { 
    const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  test('Quality and SellIn should not decreades when the item is Sulfuras', () => { 
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(10);
  });

  test('Quality should increases by 2 when the item is Backstage passes and sellIn is 10 or less', () => { 
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(42);
  });

  test('Quality should increases by 3 when the item is Backstage passes and sellIn is 5 or less', () => { 
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(43);
  });

  test('Quality should drops to 0 when the item is Backstage after the concert', () => { 
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  test('Quality should increases by 2 when the item is Backstage passes and sellIn is 10 or less, without exceeding 50', () => { 
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  test('Quality should increases by 3 when the item is Backstage passes and sellIn is 5 or less, without exceeding 50', () => { 
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  test('Quality of conjured items should degrades twice as fast as normal items', () => { 
    const gildedRose = new Shop([new Item("Conjured", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(48);
  });

  test('Quality of conjured items should not degrades less than 0', () => { 
    const gildedRose = new Shop([new Item("Conjured", 10, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

});
