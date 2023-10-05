import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HotelInformation } from 'src/app/Entity/hotel-information';
import { RoomInformation } from 'src/app/Entity/room-information';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hoteladmin-room-update',
  templateUrl: './hoteladmin-room-update.component.html',
  styleUrls: ['./hoteladmin-room-update.component.css']
})
export class HoteladminRoomUpdateComponent implements OnInit
{
  roomid:number;
  roomInformation:any;
  constructor(private dataService:DataService, private router:Router, private route:ActivatedRoute){}
  ngOnInit(): void 
  {
    this.roomid=this.route.snapshot.params['roomid'];
    this.roomInformation={
      roompriceperday: 0,
      roomdescription: '',
      roomimageurl: '',
      numberofpeople: ''
    };
    if(this.roomid != -1){
      this.dataService.getRoomInformationById(this.roomid).subscribe(
        (rowData:any) =>{
          this.roomInformation=rowData;
        }
      )
    }
  }

  onSubmit(addRoom:NgForm){
    this.roomid=this.route.snapshot.params['roomid'];
    this.dataService.updateRoomInformationById(this.roomid,this.roomInformation).subscribe(
      (rawData:any)=>{
        console.log("Data update Successfully...");
        alert("Data Update Successfully...");
        this.router.navigate(['hoteladminroomlist']);
      }
    )
  }

}
