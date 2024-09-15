import { Currency } from "./currency";
import { Item } from "./item";

export interface ItemPrice {
    itemPriceID?: number;
    itemID?: number;
    currencyID?: number;
    price?: number; 
    discount?: number; 
    displayPrice?: number; 
    item?: Item; 
    currency?: Currency; 
  }
  