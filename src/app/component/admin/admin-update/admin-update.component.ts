import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent {
  adminid: number; 
  newPassword: string;
  confirmPassword: string;
  constructor(
    private dataService: DataService,
    private router: Router,
    private authService: AuthService
  ) {}
  
  
  onSubmit(updateForm: NgForm){
    this.adminid=Number(sessionStorage.getItem('adminid'));
    
    if (this.newPassword === this.confirmPassword){
      
      this.dataService.updateAdminPassword(this.adminid,this.newPassword).subscribe(
        data=>{
          console.log(data);
          alert('Password update successfully...')
          this.router.navigate(['/adminlist']);
        }
      );
    }else{
      alert("Password doesn't match Re-enter same password:");
      updateForm.resetForm();
    }
  }
}
