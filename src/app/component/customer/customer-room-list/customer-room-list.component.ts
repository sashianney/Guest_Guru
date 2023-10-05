import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { RoomCategory } from 'src/app/Entity/room-category';
import { RoomInformation } from 'src/app/Entity/room-information';
import { RoomService } from 'src/app/Entity/room-service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-customer-room-list',
  templateUrl: './customer-room-list.component.html',
  styleUrls: ['./customer-room-list.component.css']
})
export class CustomerRoomListComponent 
{
  hotelId:number;
  roomInformation: RoomInformation[];
  hotelinformation: any;
  id: any;
  hotelname:any;
  hotellocation:any;
  roomcategory:RoomCategory;
  roomservice:RoomService[];
  price:string;
  roomid:string;
  constructor(
    private dataService: DataService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngOnInit(){

    this.hotelId = Number(sessionStorage.getItem('hotelid'));
    console.log('Hotel admin Id in hotel list component', this.hotelId);
    this.hotelname = sessionStorage.getItem('hotelname');
    console.log('Hotel admin Id in hotel list component', this.hotelname);
    this.hotellocation = sessionStorage.getItem('hotellocation');
    console.log('Hotel admin Id in hotel list component', this.hotellocation);


    sessionStorage.removeItem('hotelname-booking');
    sessionStorage.removeItem('numberofpeople-booking');
    sessionStorage.removeItem('hotellocation-booking');
    sessionStorage.removeItem('roomdescription-booking');
    sessionStorage.removeItem('roomimageurl-booking');
    sessionStorage.removeItem('price-booking');
    sessionStorage.removeItem('roomid-booking');

    this.dataService.getAllRoomInformationByHotelId( this.hotelId ).subscribe( 
      (rawData: RoomInformation[])=>{
        this.roomInformation=rawData;
        this.roomInformation.forEach((room: RoomInformation) => {
          if (!Array.isArray(room.roomservice)) {
            room.roomservice = [room.roomservice];
          }
        }); 
      }
    )

  }


  makebooking(hotelname:string,roompriceperday:number,numberofpeople:string, hotellocation:string, roomdescription:string, roomimageurl:string, roomid:number){
    
    sessionStorage.setItem('hotelname-booking',hotelname);
    sessionStorage.setItem('numberofpeople-booking',numberofpeople);
    sessionStorage.setItem('hotellocation-booking',hotellocation);
    sessionStorage.setItem('roomdescription-booking',roomdescription);
    sessionStorage.setItem('roomimageurl-booking',roomimageurl);

    this.roomid=roomid.toString();
    sessionStorage.setItem('roomid-booking',this.roomid);

    this.price=roompriceperday.toString();
    sessionStorage.setItem('price-booking',this.price);

    this.router.navigate(['/makebooking']);
  }
}
