import { Combi } from "./combi";
import { CustomerReview } from "./customerReview";
import { ItemDetail } from "./itemDetail";
import { ItemPrice } from "./itemPrice";
import { MenuPage } from "./MenuPage";
import { OrderDetail } from "./OrderDetail";

export interface Item {
    itemID?: number;
    shortDescription?: string;
    itemOrder?: number; // 'int' en C# est généralement 'number' en TypeScript
    animationUrl?: string;
    pageID?: number;
    combiID?: number;
    menuPage?: MenuPage; // Assure-toi de définir également l'interface MenuPage
    combi?: Combi; // Assure-toi de définir également l'interface Combi
    itemDetails?: ItemDetail[]; // Assure-toi de définir également l'interface ItemDetail
    itemPrices?: ItemPrice[]; // Assure-toi de définir également l'interface ItemPrice
    orderDetails?: OrderDetail[]; // Assure-toi de définir également l'interface OrderDetail
    customerReview?: CustomerReview; // Assure-toi de définir également l'interface CustomerReview
  }