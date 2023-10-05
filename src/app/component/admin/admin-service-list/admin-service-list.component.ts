import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/Entity/room-service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-service-list',
  templateUrl: './admin-service-list.component.html',
  styleUrls: ['./admin-service-list.component.css']
})
export class AdminServiceListComponent implements OnInit
{
  roomservices:RoomService[]=[];
  constructor(
    private dataService: DataService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

      ngOnInit() {
        // Fetch user data from the service when the component is initialized
        this.dataService.getAllRoomService().subscribe((data: RoomService[]) => {
          this.roomservices = data;
        });
      }
      
      deleteRoom(roomserviceid:number){
        if(confirm('Are you sure you want to delete this customer ?')){
        this.dataService.deleteRoomServiceById(roomserviceid).subscribe(
          ()=>{
            this.dataService.getAllRoomService().subscribe(
          (response: RoomService[])=>{
            this.roomservices=response;
           
            //this.router.navigate(['/adminservicelist']);
          });
        });
        }
        this.document.location.reload();
      }
      addRoomService() {  
        console.log("adding")
        this.router.navigate(['/adminserviceadd'])
      }
}
