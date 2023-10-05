import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hoteladmin-update',
  templateUrl: './hoteladmin-update.component.html',
  styleUrls: ['./hoteladmin-update.component.css']
})
export class HoteladminUpdateComponent {
  hoteladminid: number; 
  newPassword: string;
  confirmPassword: string;
  constructor(
    private dataService: DataService,
    private router: Router,
    private authService: AuthService
  ) {}
  
  
  onSubmit(updateForm: NgForm){
    this.hoteladminid=Number(sessionStorage.getItem('hoteladminid'));
    if (this.newPassword === this.confirmPassword){
      
      this.dataService.updateHotelAdminPassword(this.hoteladminid,this.newPassword).subscribe(
        data=>{
          console.log(data);
          alert('Password update successfully...')
          this.router.navigate(['/hoteladminlist']);
        }
      );
    }else{
      alert("Password doesn't match Re-enter same password:");
      updateForm.resetForm();
    }
  
  }
}