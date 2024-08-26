import { adress } from "./adress";
import { Order } from "./order";

export class BizAccount {
    public bizAccountID?: number;
    public pseudo?: string;
    public organization?: string;
    public password?: string;
    public email?: string;
    public datCrea?: Date;
    public datUpt?: Date;
    public isVerified?: boolean;
    public isLocked?: boolean;
    public adresses?: adress[]; // Correction : Remplacement de `adressID` par une liste d'adresses
    public orders?: Order[];    // Décommenter si nécessaire
}
