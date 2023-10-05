import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HotelInformation } from 'src/app/Entity/hotel-information';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-hotelstatus-update',
  templateUrl: './admin-hotelstatus-update.component.html',
  styleUrls: ['./admin-hotelstatus-update.component.css']
})
export class AdminHotelstatusUpdateComponent 
{
  hotelid:number;
  hotelstatus:string;
  hotelInfo:HotelInformation;
  constructor(private dataservice:DataService,private router:Router, private route:ActivatedRoute){}
  onSubmit(updateForm: NgForm){
    this.hotelid=this.route.snapshot.params['hotelid'];
    this.dataservice.updatehotelstatusById(this.hotelid,this.hotelstatus).subscribe(
      (hotelInformation: HotelInformation)=>{
        console.log('Updated Successfully');
        this.hotelInfo=new HotelInformation(this.hotelid,'','','','','');
        this.router.navigate(['/adminhoteldetailslist']);
      }
    )
  }
}
