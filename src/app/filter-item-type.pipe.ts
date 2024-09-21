import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './Models/item';
import { ItemType } from './Models/ItemType'; 

@Pipe({
  name: 'filterItemType'
})
export class FilterItemTypePipe implements PipeTransform {

  transform(items: Item[], itemType: ItemType): Item[] {
    if (!items || !itemType) {
      return items;
    }
    return items.filter(item => item.itemType === itemType);
  }

}
