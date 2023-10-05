
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Entity/admin';
import { Observable } from 'rxjs';
import { HotelAdmin } from '../Entity/hotel-admin';
import { Customer } from '../Entity/customer';
import { HotelInformation } from '../Entity/hotel-information';
import { RoomInformation } from '../Entity/room-information';
import { RoomCategory } from '../Entity/room-category';
import { RoomService } from '../Entity/room-service';
import { BookingInformation } from '../Entity/booking-information';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) {}

  //Admin Related API's

  //1. Register Admin
  registerAdmin(admin:Admin): Observable<Admin>{
    return this.http.post<Admin>(`http://localhost:8080/registerAdmin`, admin);
  }
  //2. Login Admin
  loginAdmin(adminemail:string, adminpassword:string ): Observable<any>{
    return this.http.post<Admin>(`http://localhost:8080/loginAdmin/${adminemail}/${adminpassword}`,{});
  }
  // 4. Get  admin by id
  getAdminById(id: number): Observable<Admin> { 
    return this.http.get<Admin>(`http://localhost:8080/getAdminById/${id}`);
  }
  // 5. get admin by email
  getAdminByEmail(email:string): Observable<Admin>{
    return this.http.get<Admin>(`http://localhost:8080/getAdminByEmail/${email}`);
  }

//updateAdminPassword/{adminid}/{newPassword}
  updateAdminPassword(adminid:number, newPassword:string):Observable<Admin>{
    return this.http.put<Admin>(`http://localhost:8080/updateAdminPassword/${adminid}/${newPassword}`,{});
  }

  //Hotel Admin Related API's

  //1. Register HotelAdmin
  registerHotelAdmin(hoteladmin: HotelAdmin) {
    return this.http.post(`http://localhost:8080/registerHotelAdmin`, hoteladmin);
  }

  //2. Login HotelAdmin
  loginHotelAdmin(hoteladminemail:string, hoteladminpassword:string ): Observable<any>{
    return this.http.post<HotelAdmin>(`http://localhost:8080/loginHotelAdmin/${hoteladminemail}/${hoteladminpassword}`,{});
  }

  // 3. verify HotelAdmin
  verifyHotelAdmin(enteredOtp: string) : Observable<any> {
    return this.http.get(`http://localhost:8080/verifyHotelAdmin/${enteredOtp}`);
  }

  // 4. Get hotel admin by id
  getHotelAdminById(id: number): Observable<HotelAdmin> {
    return this.http.get<HotelAdmin>(`http://localhost:8080/getHotelAdminById/${id}`);
  }

  //updateAdminPassword/{hoteladminid}/{newPassword}
  updateHotelAdminPassword(hoteladminid:number, newPassword:string):Observable<HotelAdmin>{
    return this.http.put<HotelAdmin>(`http://localhost:8080/updateHotelAdminPassword/${hoteladminid}/${newPassword}`,{});
  }
  //api for room service
  getAllRoomService(){
    return this.http.get<RoomService[]>(`http://localhost:8080/getAllRoomService`);
  }




  deleteRoomServiceById(roomserviceid:number){
  return this.http.delete<RoomService[]>(`http://localhost:8080/deleteRoomServiceById/${roomserviceid}`);
}




addRoomService(roomservices: RoomService): Observable<RoomService> {
  
  const url = 'http://localhost:8080/addRoomService';

  // Make the POST request and send the new room service data in the request body
  return this.http.post<RoomService>(url, roomservices);
}

//update service
getRoomServiceById(roomserviceid:number):Observable<RoomService>{
  return this.http.get<RoomService>(`http://localhost:8080/getRoomServiceById/${roomserviceid}`);
}


//room category

getAllRoomCategory(){
  return this.http.get<RoomCategory[]>(`http://localhost:8080/getAllRoomCategory`);
}

deleteRoomCategoryById(roomcategoryid:number):Observable<any>{
  return this.http.delete<RoomCategory[]>(`http://localhost:8080/deleteRoomCategoryById/${roomcategoryid}`);
}
addRoomCategory(roomcategory:RoomCategory):Observable<RoomCategory>{
  return this.http.post<RoomCategory>(`http://localhost:8080/addRoomCategory`,roomcategory)
}
getRoomCategoryById(roomcategoryid:number):Observable<any>{
  return this.http.get<RoomService>(`http://localhost:8080/getRoomCategoryById/${roomcategoryid}`);
}


  // Hotel Info related

  //addHotelInformation
  addHotelInformation(hotel: HotelInformation): Observable<HotelInformation>{
    return this.http.post<HotelInformation>(`http://localhost:8080/addHotelInformation`, hotel);
  }

  ///getHotelInformationById/{hotelid}
  getHotelInformationById(id:number): Observable<HotelInformation[]>{
    return this.http.get<HotelInformation[]>(`http://localhost:8080/getHotelInformationById/${id}`);
  }

  //getHotelInformationByHoteladminId
  getHotelInformationByHoteladminId(hoteladminid:number):Observable<HotelInformation>{
   // console.log(`http://localhost:8080/getHotelInformationByHoteladminId/${hoteladminid}`);
    
    return this.http.get<HotelInformation>(`http://localhost:8080/getHotelInformationByHoteladminId/${hoteladminid}`);
  }

  // setHotelAdminidToHotelInformation
  setHotelAdminidToHotelInformation(hotelid:number,hoteladminid:number):Observable<any>{
    return this.http.put<any>(`http://localhost:8080/setHotelAdminidToHotelInformation/${hotelid}/${hoteladminid}`,{});
  }

  //deleteHotelInformationById
  deleteHotelInformationById(hotelid:number):Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/deleteHotelInformationById/${hotelid}`);
  }

  //updateHotelInformationById
  updateHotelInformationById(hotelid:number, hotelinformation:HotelInformation):Observable<HotelInformation>{
    return this.http.put<HotelInformation>(`http://localhost:8080/updateHotelInformationById/${hotelid}`,hotelinformation);
  }
  
  

  //updatehotelstatusById
  updatehotelstatusById(hotelid: number,hotelstatus:String): Observable<HotelInformation>{
    return this.http.put<HotelInformation>(`http://localhost:8080/updatehotelstatusById/${hotelid}/${hotelstatus}`,{});
  }

  getAllHotelInformation(): Observable<HotelInformation[]>{
    return this.http.get<HotelInformation[]>(`http://localhost:8080/getAllHotelInformation`);
  }

  //getPendingHotelStatus
  getPendingHotelStatus():Observable<HotelInformation[]>{
    return this.http.get<HotelInformation[]>(`http://localhost:8080/getPendingHotelStatus`);
  }

  getAllHotelAdmin(): Observable<HotelAdmin[]>{
    return this.http.get<HotelAdmin[]>(`http://localhost:8080/getAllHotelAdmin`);
  }


  //updateHotelAdminById
  updateHotelAdminById(hoteladminid: number,hotelAdmin:HotelAdmin): Observable<HotelAdmin>{
    return this.http.put<HotelAdmin>(`http://localhost:8080/updateHotelAdminById/${hoteladminid}`,hotelAdmin);
  }


  //deleteHotelAdminById
  deleteHotelAdminById(hoteladminid:number){
    return this.http.delete<HotelAdmin[]>(`http://localhost:8080/deleteHotelAdminById/${hoteladminid}`)
  }





  //Customer Related API's

  //1. Register Customer
  registerCustomer(customer: Customer) {
    return this.http.post(`http://localhost:8080/registerCustomer`, customer);
  }

  //2. Login Customer
  loginCustomer(customeremail:string, customerpassword:string ): Observable<any>{
    return this.http.post<Customer>(`http://localhost:8080/loginCustomer/${customeremail}/${customerpassword}`,{});
  }

  // 3. verify Customer
  verifyCustomer(enteredOtp: string) : Observable<any> {
    return this.http.get(`http://localhost:8080/verifyCustomer/${enteredOtp}`);
  }

  //4. get customer by id   
  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8080/getCustomerById/${id}`);
  }

   //4. update customer by id  
  updateCustomerById(customerid: number,customer:Customer): Observable<Customer>{
    return this.http.put<Customer>(`http://localhost:8080/updateCustomerById/${customerid}`,customer);
  }

  ///updateCustomerPassword/{customerid}/newPassword
  updateCustomerPassword(customerid:number,newPassword:string ):Observable<Customer>{
    return this.http.put<Customer>(`http://localhost:8080/updateCustomerPassword/${customerid}/${newPassword}`,{});
  }

//6. getAllCustomer
getAllCustomer():Observable<Customer[]>{
  return this.http.get<Customer[]>(`http://localhost:8080/getAllCustomer`);
}


//7. deleteCustomerById
deleteCustomerById(customerid:number){
  return this.http.delete<Customer[]>(`http://localhost:8080/deleteCustomerById/${customerid}`)
}

// getApprovedHotelStatus
getApprovedHotelStatus():Observable<HotelInformation[]>{
  return this.http.get<HotelInformation[]>(`http://localhost:8080/getApprovedHotelStatus`);
}


// Room information related api
//addRoomInformation
addRoomInformation(room:RoomInformation):Observable<RoomInformation>{
  return this.http.post<RoomInformation>(`http://localhost:8080/addRoomInformation`,room);
}
//getAllRoomInformationByHotelId
getAllRoomInformationByHotelId(hoteld:number):Observable<RoomInformation[]>{
  return this.http.get<RoomInformation[]>(`http://localhost:8080/getAllRoomInformationByHotelId/${hoteld}`);
}

//getRoomInformationById
getRoomInformationById(roomid:number):Observable<RoomInformation>{
  return this.http.get<RoomInformation>(`http://localhost:8080/getRoomInformationById/${roomid}`);
}

//getAllRoomsInformationByHotelAmdinId
getAllRoomsInformationByHotelAmdinId(hoteladminid:number):Observable<RoomInformation[]>{
  return this.http.get<RoomInformation[]>(`http://localhost:8080/getAllRoomsInformationByHotelAmdinId/${hoteladminid}`);
}

//updateRoomInformationById
updateRoomInformationById(roomid:number, roominformation:any):Observable<any>{
  return this.http.put<any>(`http://localhost:8080/updateRoomInformationById/${roomid}`,roominformation );
}

//deleteRoomInformationById
deleteRoomInformationById(roomid:number):Observable<RoomInformation>{
  return this.http.delete<RoomInformation>(`http://localhost:8080/deleteRoomInformationById/${roomid}`);
}

//setHotelAdminidAndHotelid
setHotelAdminidAndHotelid(roomid:number,hotelAdminid:number,hotelid:number):Observable<any>{
  return this.http.put<any>(`http://localhost:8080/setHotelAdminidAndHotelid/${roomid}/${hotelAdminid}/${hotelid}`,{});
}
//addCategoryToRoom
addCategoryToRoom(roomid:number,categoryid:number):Observable<any>{
  return this.http.put<any>(`http://localhost:8080/addCategoryToRoom/${roomid}/${categoryid}`, {});
}

//addServiceToRoom
addServiceToRoom(roomid:number,serviceid:number):Observable<any>{
  return this.http.put<any>(`http://localhost:8080/addServiceToRoom/${roomid}/${serviceid}`,{});
}

//addBookingInformation

addBookingInformation(bookingInformation:BookingInformation):Observable<BookingInformation>{
return this.http.post<BookingInformation>(`http://localhost:8080/addBookingInformation`,bookingInformation);
}

//setCustomeridHotelidAndroomid
setCustomeridHotelidAndroomid(bookingid:number, customerid:number, hotelid:number, roomid:number):Observable<any>{
return this.http.put<any>(`http://localhost:8080/setCustomeridHotelidAndroomid/${bookingid}/${customerid}/${hotelid}/${roomid}`,{});
}


// updateIsBookedStatusByRoomId
updateIsBookedStatusByRoomId(roomid:number){
  return this.http.put(`http://localhost:8080/updateIsBookedStatusByRoomId/${roomid}`,{});
}

//searchHotelNameOrLocation
searchHotelNameOrLocation(searchKeyword:string):Observable<HotelInformation[]>{
  return this.http.get<HotelInformation[]>(`http://localhost:8080/searchHotelNameOrLocation/${searchKeyword}`);
}

//getAllBookingInformationByHotelId
getAllBookingInformationByHotelId(hotelid:number):Observable<BookingInformation[]>
{
  return this.http.get<BookingInformation[]>(`http://localhost:8080/getAllBookingInformationByHotelId/${hotelid}`);
}

//getAllBookingInformationByCustomerId
getAllBookingInformationByCustomerId(customerid:number):Observable<BookingInformation[]>
{
  return this.http.get<BookingInformation[]>(`http://localhost:8080/getAllBookingInformationByCustomerId/${customerid}`);
}
//reUpdateIsBookedStatusByRoomId
reUpdateIsBookedStatusByRoomId(roomid:number){
  return this.http.put(`http://localhost:8080/reUpdateIsBookedStatusByRoomId/${roomid}`,{});
}
}
