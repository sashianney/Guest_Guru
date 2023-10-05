import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelInformation } from 'src/app/Entity/hotel-information';

import { DataService } from 'src/app/service/data.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-hoteladmin-hotel-list',
  templateUrl: './hoteladmin-hotel-list.component.html',
  styleUrls: ['./hoteladmin-hotel-list.component.css']
})
export class HoteladminHotelListComponent implements OnInit {
  hotelinformation: HotelInformation;
  hotelAdminId:number;
  id:number;
  hotelid:string;
  addButton:boolean=true;
  
 

  constructor(
    private dataService: DataService,
   
    private router: Router,
 
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(){


    // fetch the id from the login component  
   
    this.hotelAdminId=Number(sessionStorage.getItem('hoteladminid'));
    console.log('Hotel admin Id in hotil list component',this.hotelAdminId);
    

    this.dataService.getHotelInformationByHoteladminId(this.hotelAdminId).subscribe(
      (rowData: any) => 
        { 
        if(rowData) {
          this.hotelinformation=rowData;
          console.log('Hotel Information data perfectly fetched.'+rowData); // [object Object]
          this.id=this.hotelinformation.hotelid;
          this.hotelid=this.id.toString();
          sessionStorage.setItem('hotelid',this.hotelid);
          
         
          this.router.navigate(['/hoteladminhotellist']);
          this.addButton=false;
        }
        },(error: any) => {
          console.error('Error, while fetching Hotel Information:', error);
        }
      )
    };
      
    // delete method
  deleteHotelInformationById(hotelid:number){
      if (confirm('Are you sure you want to delete this hotel?')) {
        this.dataService.deleteHotelInformationById(hotelid)
        .subscribe(() =>{
        })
      }
      sessionStorage.removeItem('hotelid');
      this.document.location.reload();
    }
    

    updateHotelInformationById(hotelid:number){
      this.router.navigate(['/hoteladminhotelupdate',hotelid]);
    }
}