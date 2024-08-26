import { ItemDetail } from "./itemDetail";

export interface Language {
    languageID?: number;
    shortDescription?: string;
    isoCode?: string;
    displayCode?: string;
    itemDetails?: ItemDetail[]; // Assure-toi de définir également l'interface ItemDetail
  }