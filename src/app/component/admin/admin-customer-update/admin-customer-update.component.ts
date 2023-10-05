import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/Entity/customer';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-customer-update',
  templateUrl: './admin-customer-update.component.html',
  styleUrls: ['./admin-customer-update.component.css']
})
export class AdminCustomerUpdateComponent implements OnInit
{
  customerid:number;
  customer:Customer;
  customerdob: Date;
  constructor(private dataservice:DataService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
   this.customerid=this.route.snapshot.params['customerid'];
   this.customer= {
    customerid: 0,
    customername: '',
    customeremail: '',
    customerphone: '',
    customerdob: new Date(),
    customergender: '',
    customeraddress: {  // Address should be an object, not a separate variable
      street: '',
      city: '',
      state: ''
    },
    customernationality: '',
    customerpassword: ''
  };
    if(this.customerid != -1){
      this.dataservice.getCustomerById(this.customerid).subscribe(
        (rawData: any)=>{
          this.customer=rawData;
        }
      );
    }
  }

  onSubmit(customerForm: NgForm){
    this.customerid=this.route.snapshot.params['customerid'];
    this.dataservice.updateCustomerById(this.customerid,this.customer).subscribe(
      (rawData:Customer)=>{
        console.log("Data updated successfully..");
        alert("Data updated sucessfully");
        this.router.navigate(['/admincstomerlist']);
      }
    )
  }
}
