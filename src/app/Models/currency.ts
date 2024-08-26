import { ItemPrice } from "./itemPrice";

export interface Currency {
    currencyID?: number;
    shortDescription?: string;
    moneyCode?: string;
    itemPrices?: ItemPrice[]; // Assure-toi de définir également l'interface ItemPrice
  }