import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomInformation } from 'src/app/Entity/room-information';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hoteladmin-room-add',
  templateUrl: './hoteladmin-room-add.component.html',
  styleUrls: ['./hoteladmin-room-add.component.css']
})
export class HoteladminRoomAddComponent 
{
  hotelAdminId:number;
  hotelid:number;
  id:number;
  roomId:string;
  roomid:number;
  roomInformation:any={
    roomid:0,
    roomnumber: 0,
    roompriceperday: 0,
    roomdescription: '',
    roomimageurl: '',
    numberofpeople: ''
    
    
  };
  constructor(private dataService:DataService, private router:Router){}


// add rooms
  onSubmit(addRoom:NgForm){
    this.dataService.addRoomInformation(this.roomInformation).subscribe(
      (roomResponse:RoomInformation) =>{ 
        if(roomResponse){
        this.roomInformation=roomResponse;
        this.id=this.roomInformation.roomid;
        this.roomId=this.id.toString();
        this.roomid=Number(this.roomId); 
   
        this.setHotelAdminidAndHotelid(this.roomid);
        }else{
          alert('Invalid Data ..')  
        }
     
      }
    );
  }  
//set hoteladmin id and hotel id 
setHotelAdminidAndHotelid(roomid1:number)
  {
    // fetch the id from the login component  
    this.hotelAdminId=Number(sessionStorage.getItem('hoteladminid'));
    console.log('Hotel admin Id in Room add component',this.hotelAdminId);

    // fetch the id from the login component  
    this.hotelid=Number(sessionStorage.getItem('hotelid'));
    console.log('Hotel Id in Room add component',this.hotelid);

    this.dataService.setHotelAdminidAndHotelid(roomid1,this.hotelAdminId,this.hotelid).subscribe(
      data =>{
        console.log(data);
        this.addCategoryToRoom();
      }
    )
  }
  addCategoryToRoom(){
    console.log('Room id in room add component inside addCategoryToRoom() '+this.roomid);
    this.router.navigate(['/hoteladminroomcategory',this.roomid])
  }

}
