import { Item } from "./item";
import { Language } from "./language";

export interface ItemDetail {
    itemDetailID?: number;
    itemID?: number;
    languageID?: number;
    description?: string;
    htmlDescription?: string;
    item?: Item; // Assure-toi de définir également l'interface Item
    language?: Language; // Assure-toi de définir également l'interface Language
  }