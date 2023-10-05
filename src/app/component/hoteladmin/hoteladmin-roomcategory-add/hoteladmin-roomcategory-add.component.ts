import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomCategory } from 'src/app/Entity/room-category';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hoteladmin-roomcategory-add',
  templateUrl: './hoteladmin-roomcategory-add.component.html',
  styleUrls: ['./hoteladmin-roomcategory-add.component.css']
})
export class HoteladminRoomcategoryAddComponent implements OnInit
{
  roomid:number;
  roomcategory:RoomCategory[]=[];
  constructor(private dataService:DataService, private router:Router, private route: ActivatedRoute){}
  // display all category
  ngOnInit() {
    this.dataService.getAllRoomCategory().subscribe(
      (customerResponse:RoomCategory[])=>
      {
        this.roomcategory=customerResponse;
        console.log(customerResponse);
      }
    );
  }
  

  //addCategoryToRoom/{roomid}/{roomcategoryid}
  addCategoryToRoom(categoryid:number){
    this.roomid=this.route.snapshot.params['roomid'];
    console.log('Room id in addCategoryToRoom() in HoteladminRoomcategoryAddComponent: '+ this.roomid);
    
    this.dataService.addCategoryToRoom(this.roomid,categoryid).subscribe(
      data => {
        console.log(data);
        alert('Category is added successfully click ok to move next');
        this.addServiceToRoom();
      }
    )
  }

  addServiceToRoom(){
    console.log('Room id in category add component inside addServiceToRoom() '+this.roomid);
    this.router.navigate(['/hoteladminroomservice',this.roomid])
  }


}
