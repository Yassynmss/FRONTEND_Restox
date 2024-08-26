import { BizAccount } from "./BizAccount";
import { MenuPage } from "./MenuPage";

export interface Menu {
    menuID?: number;
    title?: string;
    htmlDescription?: string;
    accountID?: number;
  //  bizAccount?: BizAccount; // Assure-toi de définir également l'interface BizAccount
  //  menuPages?: MenuPage[]; // Assure-toi de définir également l'interface MenuPage

  }