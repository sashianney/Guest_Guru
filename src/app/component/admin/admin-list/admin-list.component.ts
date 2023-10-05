// adminlist.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/Entity/admin'; // Import your Admin model/interface
import { DataService } from 'src/app/service/data.service';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  admin: Admin;
  adminId: number;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    
    
    this.adminId = Number(sessionStorage.getItem('adminid'));
    console.log('Admin id in admin list component: ',this.adminId);
    

    if (this.adminId) {
      // Fetch the Admin details using the service
      this.dataService.getAdminById(this.adminId).subscribe(
        (admin: Admin) => {
          if (admin) {
            this.admin = admin;
          } else {
            console.error('Admin profile data not found.');
          }
        },
        (error: any) => {
          console.error('Error fetching Admin profile:', error);
        }
      );
    } else {
      console.error('Admin ID parameter not provided in the route.');
    }
  }
}
