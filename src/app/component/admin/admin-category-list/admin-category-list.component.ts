import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomCategory } from 'src/app/Entity/room-category';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit
{
  roomcategory:RoomCategory[]=[];
 
  constructor(
    private dataService:DataService,
    private router:Router,
    @Inject(DOCUMENT) private document: Document
  ){}
  

  ngOnInit(): void {
    this.dataService.getAllRoomCategory().subscribe(
      (customerResponse:RoomCategory[])=>
      {
        this.roomcategory=customerResponse;
        console.log(customerResponse);
      }
    );
  }

   deleteroom(roomcategoryid:number){
    if(confirm('Are you sure you want to delete this customer ?')){
    this.dataService.deleteRoomCategoryById(roomcategoryid).subscribe(
      ()=>{
        this.dataService.getAllRoomCategory().subscribe(
      (response: RoomCategory[])=>{
        this.roomcategory=response;
       
        //this.router.navigate(['/admincategorylist']);
      });
    });
    
    }
    this.document.location.reload();
  }
  addRoomCategory(){
    this.router.navigate(['/admincategoryadd'])
  }
}
