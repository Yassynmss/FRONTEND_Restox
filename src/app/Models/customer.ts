import { adress } from "./adress";
import { CustomerReview } from "./customerReview";
import { Order } from "./order";

export interface Customer {
    customerID?: number;
    pseudo?: string;
    email?: string;
    password?: string;
    fullName?: string;
    datCrea?: Date;
    datUpt?: Date;
    isVerified?: boolean;
    isLocked?: boolean;
    lastConnection?: Date;
    phone?: string;
    adressID?: number;
    adress?: adress; // Assure-toi de définir également l'interface Adress
    orders?: Order[]; // Assure-toi de définir également l'interface Order
    customerReviews?: CustomerReview[]; // Assure-toi de définir également l'interface CustomerReview
  }