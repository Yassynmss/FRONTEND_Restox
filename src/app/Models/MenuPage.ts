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
    menu?: Menu; 
    items?: Item[]; 
    combis?: Combi[]; 
  }