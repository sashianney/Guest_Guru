import { Component } from '@angular/core';
import { AdminHardCodedAuthenticationService } from 'src/app/service/admin-hard-coded-authentication.service';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.css']
})
export class AdminLogoutComponent {
  constructor(public adminHardCodedAuthenticationService:AdminHardCodedAuthenticationService){}
  ngOnInit(){
    
    this.adminHardCodedAuthenticationService.adminLogout();
  }
}
