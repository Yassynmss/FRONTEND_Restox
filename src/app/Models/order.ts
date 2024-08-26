import { BizAccount } from "./BizAccount";
import { Customer } from "./customer";
import { CustomerReview } from "./customerReview";
import { DeliveryStatus } from "./DeliveryStatus";
import { DeliveryType } from "./DeliveryType";
import { OrderDetail } from "./OrderDetail";

export interface Order {
    orderID?: number;
    customerID?: number;
    bizAccountID?: number;
    orderDate?: Date;
    paymentMethodID?: number;
    paymentStatus?: string;
    deliveryStatusID?: number;
    deliveryTypeID?: number;
    datCrea?: Date;
    datUpt?: Date;
    customer?: Customer; // Assure-toi de définir également l'interface Customer
    bizAccount?: BizAccount; // Assure-toi de définir également l'interface BizAccount
    deliveryStatus?: DeliveryStatus; // Assure-toi de définir également l'interface DeliveryStatus
    deliveryType?: DeliveryType; // Assure-toi de définir également l'interface DeliveryType
    orderDetails?: OrderDetail[]; // Assure-toi de définir également l'interface OrderDetail
    customerReview?: CustomerReview; // Assure-toi de définir également l'interface CustomerReview
  }