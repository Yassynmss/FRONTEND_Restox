import { BizAccount } from "./BizAccount";
import { Customer } from "./customer";
import { CustomerReview } from "./customerReview";
import { DeliveryStatus } from "./DeliveryStatus";
import { DeliveryType } from "./DeliveryType";
import { OrderDetail } from "./OrderDetail";

export interface Order {
    orderID?: number;
    customerID?: number;
    ApplicationUserId?: number;
    orderDate?: Date;
    paymentStatus?: string;
    deliveryStatusID?: number;
    deliveryTypeID?: number;
    datCrea?: Date;
    datUpt?: Date;
    customer?: Customer; 
    deliveryStatus?: DeliveryStatus; 
    deliveryType?: DeliveryType; 
    orderDetails?: OrderDetail[];
    customerReview?: CustomerReview; 
  }