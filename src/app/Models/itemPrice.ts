import { Currency } from "./currency";
import { Item } from "./item";

export interface ItemPrice {
    itemPriceID?: number;
    itemID?: number;
    currencyID?: number;
    price?: number; // 'decimal' en C# est généralement 'number' en TypeScript
    discount?: number; // 'decimal' en C# est généralement 'number' en TypeScript
    displayPrice?: number; // 'decimal' en C# est généralement 'number' en TypeScript
    item?: Item; // Assure-toi de définir également l'interface Item
    currency?: Currency; // Assure-toi de définir également l'interface Currency
  }
  