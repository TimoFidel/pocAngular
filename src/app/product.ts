import { Vendor } from "./vendor";

export class Product {
    declare id:number;
    declare modelName:String;
    declare os:String;
    declare ram:String;
    declare driveSize:String;
    declare stockAvailable:number;
    declare vendor:Vendor
}
