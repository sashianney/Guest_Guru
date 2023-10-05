import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelInformation } from 'src/app/Entity/hotel-information';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hoteladmin-hotel-add',
  templateUrl: './hoteladmin-hotel-add.component.html',
  styleUrls: ['./hoteladmin-hotel-add.component.css']
})

export class HoteladminHotelAddComponent 
{
  id:number;
  hotelAdminid:number;
  hotelid:string;
  hotelinformation:HotelInformation= new HotelInformation(0, '','', 'pending','','');
  constructor(private dataService:DataService, private router:Router){}

  onSubmit(hotelForm:NgForm){
    
     
    // fetch the id from the login component  
     this.hotelAdminid=Number(sessionStorage.getItem('hoteladminid'));
     console.log('Hotel admin Id in hotel add component',this.hotelAdminid); 
    this.dataService.addHotelInformation(this.hotelinformation).subscribe(
      (hotelresponse: HotelInformation)=>{
        this.hotelinformation=hotelresponse;


       console.log(hotelresponse);
        this.id=this.hotelinformation.hotelid;
        this.hotelid=this.id.toString();
        //sessionStorage.setItem('hotelid',this.hotelid);
        alert('hotel added successfully');

        this.setHotelAdminIdToHotelInfo(this.id);
        
      },
      
    );
    
  }
  // set hotel admin id to hotel information (OneToOne)
  setHotelAdminIdToHotelInfo(hotelid:number){ 
    
    console.log('Hotel admin Id in hotil add component in setHotelAdminIdToHotelInfo()',hotelid);
    
    console.log('Hotel admin Id in hotil add component in setHotelAdminIdToHotelInfo()',this.hotelAdminid);
    
    // API  
    this.dataService.setHotelAdminidToHotelInformation(hotelid,this.hotelAdminid).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['hoteladminhotellist']);
      }
    );
  }
}
