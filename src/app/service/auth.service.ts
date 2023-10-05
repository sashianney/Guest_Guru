import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private hotelAdminId: number;
  private adminId:number;
  private customerId:number;
  private adminEmail:string;
  private hotelId:number;

  constructor() {}

 

  //for admin
  setAdminId(id:number){
    this.adminId=id;
  }  

  getAdminId():number{
    return this.adminId;
  }

  setAdminEmail(email:string){
    this.adminEmail=email;
  }

  getAdminEmail():string{
    return this.adminEmail;
  }

  //for customer 
  setCustomerId(id:number){
    this.customerId=id;
  }
  
  getCustomerId():number{
    return this.customerId
  }

  //hotelId
  setHotelId(id:number){
    this.hotelId=id;
  }
  getHotelId(){
    return this.hotelId;
  }

   //for hotel admin
   setHotelAdminId(id: number) {
    this.hotelAdminId = id;
  }

  getHotelAdminId(): number{
    return this.hotelAdminId;
  }
}
