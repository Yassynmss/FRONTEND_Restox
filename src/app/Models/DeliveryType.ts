import { Order } from "./order";

export interface DeliveryType {
    deliveryTypeID?: number;
    displayDesc?: string;
    orders?: Order[]; // Assure-toi de définir également l'interface Order
  }