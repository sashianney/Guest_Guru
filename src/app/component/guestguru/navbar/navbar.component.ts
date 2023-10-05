import { Component } from '@angular/core';
import { AdminHardCodedAuthenticationService } from 'src/app/service/admin-hard-coded-authentication.service';
import { CustomerHardCodedAuthenticationService } from 'src/app/service/customer-hard-coded-authentication.service';
import { HoteladminHardCodedAuthenticationService } from 'src/app/service/hoteladmin-hard-coded-authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public adminHardCodedAuthenticationService:AdminHardCodedAuthenticationService, 
    public customerHardCodedAuthenticationService:CustomerHardCodedAuthenticationService,
    public hoteladminHardCodedAuthenticationService:HoteladminHardCodedAuthenticationService ){}
  adminlogout(){
    this.adminHardCodedAuthenticationService.adminLogout();
  }

  customerlogout(){
    this.customerHardCodedAuthenticationService.customerLogout();
  }

  hoteladminlogout(){
    this.hoteladminHardCodedAuthenticationService.hoteladminLogout();
  }
  
}
