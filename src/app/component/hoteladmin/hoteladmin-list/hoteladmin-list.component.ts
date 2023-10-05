import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelAdmin } from 'src/app/Entity/hotel-admin';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hoteladmin-list',
  templateUrl: './hoteladmin-list.component.html',
  styleUrls: ['./hoteladmin-list.component.css']
})
export class HotelAdminListComponent implements OnInit {
  hotelAdmin: HotelAdmin;
  hotelAdminId: number;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    
    
 
    this.hotelAdminId=Number(sessionStorage.getItem('hoteladminid'));
    console.log('Hotel admin Id in hotil list component',this.hotelAdminId);
    
    if (this.hotelAdminId) {
      this.dataService.getHotelAdminById(this.hotelAdminId).subscribe(
        (hotelAdmin: HotelAdmin) => {
          if (hotelAdmin) {
            this.hotelAdmin = hotelAdmin;
          } else {
            console.error('Hotel Admin profile data not found.');
          }
        },
        (error: any) => {
          console.error('Error, while fetching Hotel Admin profile:', error);
        }
      );
    } else {
      console.error('Hotel Admin ID parameter not provided in the route.');
    }
  }
}
