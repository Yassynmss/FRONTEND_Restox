import { Customer } from "./customer";
import { Order } from "./order";

export interface CustomerReview {
    customerReviewID?: number;
    customerID?: number;
    orderID?: number;
    comment?: string;
    rate?: number; // 'int' en C# est généralement 'number' en TypeScript
    isVerified?: boolean;
    datCrea?: Date; // 'DateTime' en C# est 'Date' en TypeScript
    datUpt?: Date; // 'DateTime' en C# est 'Date' en TypeScript
    order?: Order; // Assure-toi de définir également l'interface Order
    customer?: Customer; // Assure-toi de définir également l'interface Customer
  }