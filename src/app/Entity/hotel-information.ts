export class HotelInformation 
{
    hotelid:number;
    hotelname:string;
    hotellocation:string;
    hotelstatus:string;
    hoteldescription:string;
    hotelimageurl:string;
   


    constructor(hotelid:number,hotelname:string,hotellocation:string,hotelstatus:string,hoteldescription:string, hotelimageurl:string){
        this.hotelid=hotelid;
        this.hotelname=hotelname;
        this.hotellocation=hotellocation;
        this.hotelstatus=hotelstatus;
        this.hoteldescription=hoteldescription;
        this.hotelimageurl=hotelimageurl;
    }
}
