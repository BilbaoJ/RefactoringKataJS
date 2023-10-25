class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  
  updateQuality() {
    const itemSulfuras = 'Sulfuras, Hand of Ragnaros';
    const itemAgedBrie = 'Aged Brie';
    const itemBackstage = 'Backstage passes to a TAFKAL80ETC concert';
    const itemConjured = 'Conjured'

    for (const item of this.items) {

      if(item.name === itemSulfuras){
        continue
      }
      if (item.name === itemAgedBrie) {
        this.updateAgeBrieItem(item);
      }else if(item.name === itemBackstage){
        this.updateBackstageItem(item);
      }else if(item.name === itemConjured){
        this.updateConjuredItem(item);
      }else{
        this.updateNormalItem(item);
      } 
      item.sellIn--;
    }
    return this.items;
  }

  updateAgeBrieItem(item){
    if (item.quality < 50) {
      item.quality++;
    }
    if (item.sellIn < 1 && item.quality < 50){
      item.quality++;
    }
  }

  updateBackstageItem(item){
    if (item.quality < 50) {
      item.quality++;
      if (item.sellIn <= 10 && item.quality < 50) {
        item.quality++;
      }
      if (item.sellIn <= 5 && item.quality < 50) {
        item.quality++;
      }
    }
    if (item.sellIn < 1) {
      item.quality = 0;
    }
  }

  updateNormalItem(item){
    if(item.quality > 0){
      item.quality--;
    }
    if (item.sellIn < 1 && item.quality > 0) {
      item.quality--;
    }
  }

  updateConjuredItem(item){
    if (item.quality > 1) {
      item.quality--;
    }
    item.quality--
  }
}


module.exports = {
  Item,
  Shop
}