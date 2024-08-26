import { Combi } from "./combi";
import { Item } from "./item";
import { Menu } from "./Menu";

export interface MenuPage {
    menuPageID?: number;
    shortDescription?: string;
    htmlDescription?: string;
    pageOrder?: string;
    animationUrl?: string;
    menuID?: number;
    menu?: Menu; // Assure-toi de définir également l'interface Menu
    items?: Item[]; // Assure-toi de définir également l'interface Item
    combis?: Combi[]; // Assure-toi de définir également l'interface Combi
  }