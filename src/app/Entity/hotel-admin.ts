export class HotelAdmin 
{
    hoteladminid:number;
    hoteladminname:string;
    hoteladminemail:string;
    hoteladminphonenumber:string;
    hoteladminpassword:string;

    constructor(hoteladminid:number,hoteladminname:string,hoteladminemail:string,
        hoteladminphonenumber:string,
        hoteladminpassword:string)
    {
        this.hoteladminid=hoteladminid;
        this.hoteladminname = hoteladminname;
		this.hoteladminemail = hoteladminemail;
		this.hoteladminphonenumber = hoteladminphonenumber;
		this.hoteladminpassword = hoteladminpassword;
    }
}
