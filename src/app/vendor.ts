import { Product } from "./product";

export class Vendor {
    declare id:number;
    declare vendorName:string;
    declare rating:number;
    declare address:String;
    declare contactNumebr:String;
    declare product:Set<Product>;

}
