import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelInformation } from 'src/app/Entity/hotel-information';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hoteladmin-hotel-update',
  templateUrl: './hoteladmin-hotel-update.component.html',
  styleUrls: ['./hoteladmin-hotel-update.component.css']
})
export class HoteladminHotelUpdateComponent implements OnInit{
  
  hotelid:number;
  hotelAdminid:number;
  hotelinformation:HotelInformation;
  constructor(private dataService:DataService, private router:Router, private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.hotelid=this.route.snapshot.params['hotelid'];
    this.hotelinformation=new HotelInformation(0, '','', 'pending','','');
    if(this.hotelid != -1){
      this.dataService.getHotelInformationById(this.hotelid).subscribe(
        (rowData:any) =>{
          this.hotelinformation=rowData;
        }
      )
    }
  }


  onSubmit(hotelForm:NgForm)
  {
    this.hotelid=this.route.snapshot.params['hotelid'];
    this.dataService.updateHotelInformationById(this.hotelid, this.hotelinformation).subscribe(
      (rowData:HotelInformation) =>{
        console.log("Data update Successfully...");
        alert("Data Update Successfully...");
        this.router.navigate(['hoteladminhotellist']);
      }
    )
  }
    




}
  

