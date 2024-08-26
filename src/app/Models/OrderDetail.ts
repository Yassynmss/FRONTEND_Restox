import { Item } from "./item";
import { Order } from "./order";

export interface OrderDetail {
    orderDetailID?: number;
    orderID?: number;
    itemID?: number;
    price?: number; // 'decimal' en C# est généralement 'number' en TypeScript
    deliveryStatus?: string;
    order?: Order; // Assure-toi de définir également l'interface Order
    item?: Item; // Assure-toi de définir également l'interface Item
  }