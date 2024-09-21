// item.ts
import { Combi } from "./combi";
import { CustomerReview } from "./customerReview";
import { ItemDetail } from "./itemDetail";
import { ItemPrice } from "./itemPrice";
import { ItemType } from "./ItemType";
import { MenuPage } from "./MenuPage";
import { OrderDetail } from "./OrderDetail";

export interface Item {
    itemID?: number;
    itemPriceID?: number;
    shortDescription?: string;
    itemOrder?: number; 
    animationUrl?: string;
    pageID?: number;
    combiID?: number;
    menuPage?: MenuPage; 
    combi?: Combi; 
    itemDetails?: ItemDetail[]; 
    itemPrices?: ItemPrice[];
    orderDetails?: OrderDetail[]; 
    customerReview?: CustomerReview; 
    itemType?: ItemType; 
}
