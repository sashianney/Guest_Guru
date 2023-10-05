import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Entity/admin';
import { HotelAdmin } from 'src/app/Entity/hotel-admin';
import { AuthService } from 'src/app/service/auth.service';

import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  adminemail:string;
  adminpassword:string;
  admin:Admin
  adminid:string
  id:number
  
  constructor(
    private dataService:DataService, 
    private router:Router, 
    private authService: AuthService
    ){}
  onSubmit(adminForm:NgForm){
    console.log("register Verified....");
      this.dataService.loginAdmin(this.adminemail,this.adminpassword).subscribe(
        (adminResponse : Admin) => {
        // Handle the response (e.g., show a success message)
        console.log(adminResponse.adminid);
        if(adminResponse){
          sessionStorage.setItem('authenticatedAdmin',this.adminemail);
        console.log('Admin Login Successfully...', adminResponse);
        alert('Login Successfully'); // Alert message

        this.admin=adminResponse;
        this.id=this.admin.adminid;

        this.adminid = this.id.toString();
        sessionStorage.setItem('adminid', this.adminid);
        
        // Navigate to the AdminListComponent
        this.router.navigate(['/adminlist']);
        
        }else{
          alert('Please Enter valid Email and Password...'); // Alert message
          adminForm.resetForm(); // Clear the form
        }
      },
      (error: any) => {
        console.error('Error logging in:', error);
      }
      );
  }
}
