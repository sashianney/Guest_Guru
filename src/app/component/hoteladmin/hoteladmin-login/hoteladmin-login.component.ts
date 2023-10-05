import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelAdmin } from 'src/app/Entity/hotel-admin';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hoteladmin-login',
  templateUrl: './hoteladmin-login.component.html',
  styleUrls: ['./hoteladmin-login.component.css']
})
export class HoteladminLoginComponent {
  hotelAdmin:HotelAdmin;
  hoteladminemail: string;
  hoteladminpassword: string;
  id:number;
  hotelAdminid:string;
  constructor(
    private dataService: DataService,
    private router: Router,
    ) {}
   
  onSubmit(hoteladminForm: NgForm) {
    this.dataService.loginHotelAdmin(this.hoteladminemail, this.hoteladminpassword).subscribe(
      (hoteladminResponse: any) => {
        
        if (hoteladminResponse) {
          sessionStorage.setItem('authenticatedHoteladmin',this.hoteladminemail);
          console.log('Hotel Admin Login Successfully...', hoteladminResponse);
          alert('Login Successfully...');
          
          this.hotelAdmin=hoteladminResponse;
          this.id=this.hotelAdmin.hoteladminid;
          
          this.hotelAdminid = this.id.toString();
          sessionStorage.setItem('hoteladminid',this.hotelAdminid);
       

          console.log('Hotel Admin Id: '+this.id);
          this.router.navigate(['/hoteladminlist']);
        } else {
          alert('Please Enter valid Email and Password...');
          hoteladminForm.resetForm(); // Clear the form
        }
      },
      (error: any) => {
        console.error('Error logging in:', error);
      }
    );
  }
}
