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
    animationUrl?: string; // Ceci doit recevoir le chemin du fichier
    pageID?: number;
    combiID?: number;
    menuPage?: MenuPage; 
    combi?: Combi; 
    itemDetails?: ItemDetail[]; 
    itemPrices?: ItemPrice[];
    orderDetails?: OrderDetail[]; 
    customerReview?: CustomerReview; 
    itemType?: ItemType; 
    imageFile?: File; // Ajoutez ce champ pour le fichier d'image
}
