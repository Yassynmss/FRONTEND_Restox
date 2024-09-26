import { adress } from "./adress";
import { Order } from "./order";
import { Role } from "./Role";

export class BizAccount {
    public ApplicationUserId?: string;
    public pseudo?: string;
    public organization?: string;
    public password?: string;
    public email?: string;
    public datCrea?: String;
    public datUpt?: String;
    public fullName?: string;
    public Phone?: number;
    public isVerified?: boolean;
    public isLocked?: boolean;
    public adresses?: adress[]; 
    public orders?: Order[];    
    public Role?: Role;
    public photo?:string;
}
export class login {
    public pseudo?: string;
    public password?: string;
}