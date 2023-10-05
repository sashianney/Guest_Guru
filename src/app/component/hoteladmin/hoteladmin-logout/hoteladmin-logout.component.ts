import { Component } from '@angular/core';
import { HoteladminHardCodedAuthenticationService } from 'src/app/service/hoteladmin-hard-coded-authentication.service';

@Component({
  selector: 'app-hoteladmin-logout',
  templateUrl: './hoteladmin-logout.component.html',
  styleUrls: ['./hoteladmin-logout.component.css']
})
export class HoteladminLogoutComponent {
  constructor(public hoteladminHardCodedAuthenticationService:HoteladminHardCodedAuthenticationService){}

  ngOnInit(){
    this.hoteladminHardCodedAuthenticationService.hoteladminLogout();
  }
}
