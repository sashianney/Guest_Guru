import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Entity/customer';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent{
  
  customerid: number; 
  newPassword: string;
  confirmPassword: string;
  constructor(
    private dataService: DataService,
    private router: Router,
    private authService: AuthService
  ) {}
  
  
  onSubmit(updateForm: NgForm){
    this.customerid=Number(sessionStorage.getItem('customerid'));

    if (this.newPassword === this.confirmPassword){
      
      this.dataService.updateCustomerPassword(this.customerid,this.newPassword).subscribe(
        data=>{
          console.log(data);
          alert('Password update successfully...')
          this.router.navigate(['/customerlist']);
        }
      );
    }else{
      alert("Password doesn't match Re-enter same password:");
      updateForm.resetForm();
    }
  }
}
