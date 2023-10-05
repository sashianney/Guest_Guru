import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HotelAdmin } from 'src/app/Entity/hotel-admin';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-hoteladmin-update',
  templateUrl: './admin-hoteladmin-update.component.html',
  styleUrls: ['./admin-hoteladmin-update.component.css']
})
export class AdminHoteladminUpdateComponent implements OnInit
{
  hoteladminid:number;
  hoteladmin:HotelAdmin;
  constructor(private dataService:DataService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.hoteladminid=this.route.snapshot.params['hoteladminid'];
    this.hoteladmin={
      hoteladminid: 0,
      hoteladminname:'',
      hoteladminemail:'',
      hoteladminphonenumber:'',
      hoteladminpassword:''
    };
    if(this.hoteladminid !=-1){
        this.dataService.getHotelAdminById(this.hoteladminid).subscribe(
          (rawData: any)=>{
            this.hoteladmin=rawData;
          }
        )
    }
  }
onSubmit(hoteladminForm:NgForm){
  this.hoteladminid=this.route.snapshot.params['hoteladminid'];
  this.dataService.updateHotelAdminById(this.hoteladminid,this.hoteladmin).subscribe(
    (rawData:HotelAdmin)=>{
      console.log("Data updated Successfully..");
      alert("Data updated successfully");
      this.router.navigate(['adminhoteladminlist']);
    }
  )
}
}
