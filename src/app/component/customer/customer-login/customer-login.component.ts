import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Entity/customer';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {
  
  customeremail:string;
  customerpassword:string;
  customer:Customer;
  customerid:string;
  id:number;

  constructor(
    private dataService:DataService, 
    private router:Router,
    private authService: AuthService
    ){}
  
  onSubmit(customerForm:NgForm){
    console.log('register verified...');

    this.dataService.loginCustomer(this.customeremail, this.customerpassword).subscribe(
      (customerResponsive)=>{
        if(customerResponsive){
          sessionStorage.setItem('authenticatedCustomer',this.customeremail);
        console.log('Customer login successfully',customerResponsive);
          alert('Login successfully...');
          
          this.customer=customerResponsive;
          this.id=this.customer.customerid;

          this.customerid=this.id.toString();
          sessionStorage.setItem('customerid',this.customerid);
          
          // Navigate to the HotelAdminListComponent
          this.router.navigate(['/customerlist']);
      }
      else{
        alert('Please Enter valid Email and Password...'); // Alert message
        customerForm.resetForm(); // Clear the form
      }
      }
    )
    
    
  }
}
