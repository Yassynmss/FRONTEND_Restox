import { Item } from "./item";
import { MenuPage } from "./MenuPage";

export interface Combi {
    combiID?: number;
    pageID?: number;
    combiCode?: string;
    price?: number; // 'decimal' en C# est équivalent à 'number' en TypeScript
    discount?: number; // 'decimal' en C# est équivalent à 'number' en TypeScript
    displayPrice?: number; // 'decimal' en C# est équivalent à 'number' en TypeScript
    menuPage?: MenuPage; // Assure-toi de définir également l'interface MenuPage
    items?: Item[]; // Assure-toi de définir également l'interface Item
  }