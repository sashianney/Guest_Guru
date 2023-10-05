import { Address } from "./address"

export class Customer 
{
    customerid:number;
    customername:string;
    customeremail:string;
    customerphone:string;
    customerdob:Date;
    customergender:string;
    customeraddress:Address;
    customernationality:string;
    customerpassword:string;

    constructor(customerid:number,
        customername:string,
        customeremail:string,
        customerphone:string,
        customerdob:Date,
        customergender:string,
        customeraddress:Address,
        customernationality:string,
        customerpassword:string){
            this.customerid=customerid;
            this.customername=customername;
            this.customeremail=customeremail;
            this.customerphone=customerphone;
            this.customerdob=customerdob;
            this.customergender=customergender;
            this.customeraddress=customeraddress;
            this.customernationality=customernationality;
            this.customerpassword=customerpassword;
        }
}
