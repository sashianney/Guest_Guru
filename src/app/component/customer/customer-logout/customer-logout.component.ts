import { Component } from '@angular/core';
import { CustomerHardCodedAuthenticationService } from 'src/app/service/customer-hard-coded-authentication.service';

@Component({
  selector: 'app-customer-logout',
  templateUrl: './customer-logout.component.html',
  styleUrls: ['./customer-logout.component.css']
})
export class CustomerLogoutComponent {
  constructor(public customerHardCodedAuthenticationService:CustomerHardCodedAuthenticationService){}

  ngOnInit(){
    this.customerHardCodedAuthenticationService.customerLogout();
  }
}
