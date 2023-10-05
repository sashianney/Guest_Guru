export class Admin 
{
    adminid:number;
    adminname:string;
    adminemail:string;
    adminpassword:string;
    


    constructor(adminid:number,adminname:string, adminemail:string,adminpassword:string){
        this.adminid=adminid;
        this.adminname = adminname;
		this.adminemail = adminemail;
		this.adminpassword = adminpassword;
    }
}
