import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelAdmin } from 'src/app/Entity/hotel-admin';
import { HotelInformation } from 'src/app/Entity/hotel-information';
import { RoomCategory } from 'src/app/Entity/room-category';
import { RoomInformation } from 'src/app/Entity/room-information';
import { RoomService } from 'src/app/Entity/room-service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hoteladmin-room-list',
  templateUrl: './hoteladmin-room-list.component.html',
  styleUrls: ['./hoteladmin-room-list.component.css']
})
export class HoteladminRoomListComponent implements OnInit {
  roomInformation: RoomInformation[] = [];
  hotelAdminId: number;
  hotelinformation: HotelInformation;
  id: number;
  hotelname: string;
  hotellocation:string;
  roomcategory: RoomCategory;
  hotelAdmin: HotelAdmin;
  roomservice: RoomService[];
  

  roomid:number
  
  constructor(
    private dataService: DataService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.hotelAdminId = Number(sessionStorage.getItem('hoteladminid'));
    console.log('Hotel admin Id in hotel list component', this.hotelAdminId);

    this.dataService.getAllRoomsInformationByHotelAmdinId(this.hotelAdminId).subscribe(
      (rowData: RoomInformation[]) => {
        if (rowData) {
          this.roomInformation = rowData;
         
          this.roomInformation.forEach((room: RoomInformation) => {
            if (!Array.isArray(room.roomservice)) {
              room.roomservice = [room.roomservice];
            }
          }); 
          this.dataService.getHotelInformationByHoteladminId(this.hotelAdminId).subscribe(
            (rowData1: any) => {
              if (rowData1) {
                this.hotelinformation = rowData1;
                this.id = this.hotelinformation.hotelid;
                console.log('Hotelid in getAllRoomsInformationByHotelAmdinId component: ' + this.id);
                console.log('Hotel Information data perfectly fetched.' + rowData1); // [object Object]
              }
            }
          );
          // getRoomRerviceByRoomId
          console.log('Room Information data perfectly fetched.' + this.roomInformation); // [object Object]
          this.router.navigate(['/hoteladminroomlist']);
        }
      },
      (error: any) => {
        console.error('Error, while fetching Room Information:', error);
      }
    );
  }
  
  updateRoomInformationById(roomid:number){
    this.router.navigate(['/hoteladminroomupdate', roomid])
  }

  deleteRoomInformationById(roomid:number){
    if (confirm('Are you sure you want to delete this Room?')) {
      this.dataService.deleteRoomInformationById(roomid).subscribe(
        ()=>{
        })
    }
    this.document.location.reload();
  }
}
