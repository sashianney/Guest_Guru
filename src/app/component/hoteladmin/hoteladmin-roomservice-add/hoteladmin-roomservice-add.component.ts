import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/Entity/room-service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hoteladmin-roomservice-add',
  templateUrl: './hoteladmin-roomservice-add.component.html',
  styleUrls: ['./hoteladmin-roomservice-add.component.css']
})
export class HoteladminRoomserviceAddComponent implements OnInit
{
  roomservices:RoomService[]=[];
  roomid:number;
  constructor(
    private dataService: DataService,
    private router: Router,
    private route:ActivatedRoute,
    @Inject(DOCUMENT) private document: Document
  ) {}


  ngOnInit(): void {
        this.dataService.getAllRoomService().subscribe((data: RoomService[]) => {
          this.roomservices = data;
    });
  }
  addServiceToRoom(roomserviceid:number){
    this.roomid=this.route.snapshot.params['roomid'];

    this.dataService.addServiceToRoom(this.roomid,roomserviceid).subscribe(
      data=>{
        alert('Service added successfully click ok for add more service');
        this.router.navigate(['/hoteladminroomservice']);
      }
    )
  }


}
