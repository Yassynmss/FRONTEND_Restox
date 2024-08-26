import { Order } from "./order";

export interface DeliveryStatus {
    deliveryStatusID?: number;
    displayDesc?: string;
    orders?: Order[]; // Assure-toi de définir également l'interface Order
  }