import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Entity/admin';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent 
{

  admin:Admin = new Admin(0, '','','');
  
  constructor(private dataService:DataService, private router:Router){}
  onSubmit(adminForm:NgForm){
      console.log("register Verified....");
      this.dataService.registerAdmin(this.admin).subscribe(
        (adminResponsive: Admin) => {
        // Handle the response (e.g., show a success message)
        console.log('Admin Registerd Successfully...', adminResponsive);
        alert('Registerd Successfully'); // Alert message
        adminForm.resetForm(); // Clear the form
      }
      );
      this.router.navigate(['/adminlogin']);
  }
  

}
