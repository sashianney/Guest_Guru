import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './component/guestguru/navbar/navbar.component';
import { DashboardComponent } from './component/guestguru/dashboard/dashboard.component';
import { FooterComponent } from './component/guestguru/footer/footer.component';
import { CopyrightComponent } from './component/guestguru/copyright/copyright.component';
import { AboutComponent } from './component/guestguru/about/about.component';
import { ListyourpropertyComponent } from './component/guestguru/listyourproperty/listyourproperty.component';
import { AdminloginComponent } from './component/admin/adminlogin/adminlogin.component';
import { AdminsignupComponent } from './component/admin/adminsignup/adminsignup.component';
import { ContactComponent } from './component/guestguru/contact/contact.component';
import { CustomerSignupComponent } from './component/customer/customer-signup/customer-signup.component';
import { HoteladminSignupComponent } from './component/hoteladmin/hoteladmin-signup/hoteladmin-signup.component';
import { CustomerLoginComponent } from './component/customer/customer-login/customer-login.component';
import { HoteladminLoginComponent } from './component/hoteladmin/hoteladmin-login/hoteladmin-login.component';
import { TermsAndConditionsComponent } from './component/guestguru/terms-and-conditions/terms-and-conditions.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdmindashboardComponent } from './component/admin/admindashboard/admindashboard.component';
import { HoteladminDashboardComponent } from './component/hoteladmin/hoteladmin-dashboard/hoteladmin-dashboard.component';
import { CustomerDashboardComponent } from './component/customer/customer-dashboard/customer-dashboard.component';
import { HotelAdminListComponent } from './component/hoteladmin/hoteladmin-list/hoteladmin-list.component';
import { AdminListComponent } from './component/admin/admin-list/admin-list.component';
import { AdminCategoryListComponent } from './component/admin/admin-category-list/admin-category-list.component';
import { AdminServiceListComponent } from './component/admin/admin-service-list/admin-service-list.component';
import { AdminHoteldetailsListComponent } from './component/admin/admin-hoteldetails-list/admin-hoteldetails-list.component';
import { AdminHoteladminListComponent } from './component/admin/admin-hoteladmin-list/admin-hoteladmin-list.component';
import { AdminRouteGaurdService } from './service/admin-route-gaurd.service';
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { CustomerCarddetailsListComponent } from './component/customer/customer-carddetails-list/customer-carddetails-list.component';
import { CustomerBookingComponent } from './component/customer/customer-booking/customer-booking.component';
import { CustomerTransactionComponent } from './component/customer/customer-transaction/customer-transaction.component';
import { CustomerLogoutComponent } from './component/customer/customer-logout/customer-logout.component';
import { CustomerRouteGaurdService } from './service/customer-route-gaurd.service';
import { HoteladminBankaccountListComponent } from './component/hoteladmin/hoteladmin-bankaccount-list/hoteladmin-bankaccount-list.component';
import { HoteladminHotelListComponent } from './component/hoteladmin/hoteladmin-hotel-list/hoteladmin-hotel-list.component';
import { HoteladminRoomListComponent } from './component/hoteladmin/hoteladmin-room-list/hoteladmin-room-list.component';
import { HoteladminLogoutComponent } from './component/hoteladmin/hoteladmin-logout/hoteladmin-logout.component';
import { HoteladminCustomerBookingComponent } from './component/hoteladmin/hoteladmin-customer-booking/hoteladmin-customer-booking.component';
import { HoteladminCustomerTransactionComponent } from './component/hoteladmin/hoteladmin-customer-transaction/hoteladmin-customer-transaction.component';
import { HoteladminRouteGaurdService } from './service/hoteladmin-route-gaurd.service';
import { HoteladminUpdateComponent } from './component/hoteladmin/hoteladmin-update/hoteladmin-update.component';
import { CustomerUpdateComponent } from './component/customer/customer-update/customer-update.component';
import { AdminUpdateComponent } from './component/admin/admin-update/admin-update.component';
import { HoteladminHotelAddComponent } from './component/hoteladmin/hoteladmin-hotel-add/hoteladmin-hotel-add.component';
import { HoteladminHotelUpdateComponent } from './component/hoteladmin/hoteladmin-hotel-update/hoteladmin-hotel-update.component';
import { AdminCustomerListComponent } from './component/admin/admin-customer-list/admin-customer-list.component';
import { AdminCustomerUpdateComponent } from './component/admin/admin-customer-update/admin-customer-update.component';
import { AdminHoteladminUpdateComponent } from './component/admin/admin-hoteladmin-update/admin-hoteladmin-update.component';
import { AdminHotelstatusUpdateComponent } from './component/admin/admin-hotelstatus-update/admin-hotelstatus-update.component';
import { AdminCategoryAddComponent } from './component/admin/admin-category-add/admin-category-add.component';
import { AdminServiceAddComponent } from './component/admin/admin-service-add/admin-service-add.component';
import { HoteladminRoomAddComponent } from './component/hoteladmin/hoteladmin-room-add/hoteladmin-room-add.component';
import { HoteladminRoomcategoryAddComponent } from './component/hoteladmin/hoteladmin-roomcategory-add/hoteladmin-roomcategory-add.component';
import { HoteladminRoomserviceAddComponent } from './component/hoteladmin/hoteladmin-roomservice-add/hoteladmin-roomservice-add.component';
import { HoteladminRoomUpdateComponent } from './component/hoteladmin/hoteladmin-room-update/hoteladmin-room-update.component';
import { CustomerRoomListComponent } from './component/customer/customer-room-list/customer-room-list.component';
import { MakeBookingComponent } from './component/other-components/make-booking/make-booking.component';



const routes: Routes = [
  // Site related Routing 
  {path: '',component:DashboardComponent},
  {path: 'dashborad',component:DashboardComponent},
  {path: 'navbar',component:NavbarComponent},
  {path: 'footer',component:FooterComponent},
  {path: 'copyright',component:CopyrightComponent},
  {path: 'about',component:AboutComponent},
  {path: 'listyourproperty',component:ListyourpropertyComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'listyourproperty',component:ListyourpropertyComponent},
  {path: 'T&C',component:TermsAndConditionsComponent},

  // Admin relatid 
  {path: 'adminlogin',component:AdminloginComponent},
  {path: 'adminsignup', component:AdminsignupComponent},
  {path: 'admindashboard', component:AdmindashboardComponent,canActivate:[AdminRouteGaurdService] },
  {path: 'adminlist', component: AdminListComponent,canActivate:[AdminRouteGaurdService] },
  {path: 'adminupdate', component:AdminUpdateComponent},
  {path: 'category', component: AdminCategoryListComponent,canActivate:[AdminRouteGaurdService]  },
  {path: 'service', component: AdminServiceListComponent,canActivate:[AdminRouteGaurdService]  },
  {path: 'admincstomerlist', component: AdminCustomerListComponent,canActivate:[AdminRouteGaurdService]  },
  {path: 'adminhoteladminlist', component: AdminHoteladminListComponent,canActivate:[AdminRouteGaurdService]  },
  {path: 'adminhoteldetailslist', component: AdminHoteldetailsListComponent,canActivate:[AdminRouteGaurdService]  },
  {path: 'adminhotelstatusupdate/:hotelid',component:AdminHotelstatusUpdateComponent},
  {path: 'admincustomerupdate/:customerid',component:AdminCustomerUpdateComponent},
  {path:'adminhoteladminupdate/:hoteladminid',component:AdminHoteladminUpdateComponent},
  
  {path:'adminservicelist',component:AdminServiceListComponent},
  {path:'adminserviceadd',component:AdminServiceAddComponent},
  {path:'admincategorylist',component:AdminCategoryListComponent},
  {path:'admincategoryadd',component:AdminCategoryAddComponent},

  
  
  
  
  {path: 'adminlogout', component:  DashboardComponent},


  // Hotel Admin related
  {path: 'hoteladminlogin',component:HoteladminLoginComponent},
  {path: 'hoteladminsignup', component:HoteladminSignupComponent},
  {path: 'hoteladmindashboard', component:HoteladminDashboardComponent,canActivate:[HoteladminRouteGaurdService]},
  {path: 'hoteladminlist', component: HotelAdminListComponent,canActivate:[HoteladminRouteGaurdService] },
  {path: 'hoteladminupdate', component:HoteladminUpdateComponent},
  {path: 'hoteladminbankaccountlist',component:HoteladminBankaccountListComponent,canActivate:[HoteladminRouteGaurdService]},
  {path: 'hoteladminhotellist',component:HoteladminHotelListComponent, canActivate:[HoteladminRouteGaurdService]},
  {path: 'hoteladminroomlist',component:HoteladminRoomListComponent,canActivate:[HoteladminRouteGaurdService]},
  {path: 'hoteladmincustomerbooking',component:HoteladminCustomerBookingComponent,canActivate:[HoteladminRouteGaurdService]},
  {path: 'hoteladmincustomertransaction',component:HoteladminCustomerTransactionComponent,canActivate:[HoteladminRouteGaurdService]},
  {path: 'hoteladminhoteladd', component:HoteladminHotelAddComponent},
  {path: 'hoteladminhotelupdate/:hotelid',component:HoteladminHotelUpdateComponent},
  {path: 'hoteladminroomadd',component:HoteladminRoomAddComponent},
  {path: 'hoteladminroomcategory/:roomid', component:HoteladminRoomcategoryAddComponent},
  {path: 'hoteladminroomservice/:roomid', component:HoteladminRoomserviceAddComponent},
  {path: 'hoteladminroomupdate/:roomid', component:HoteladminRoomUpdateComponent},
  {path: 'hoteladminlogout',component:DashboardComponent},
  
  //Customer related
  {path: 'customerlogin',component:CustomerLoginComponent},
  {path: 'customersignup', component:CustomerSignupComponent},
  {path: 'customerdashboard', component:CustomerDashboardComponent,canActivate:[CustomerRouteGaurdService]},
  {path: 'customerlist', component:CustomerListComponent,canActivate:[CustomerRouteGaurdService]},
  {path: 'customerupdate', component:CustomerUpdateComponent},
  {path: 'customercardlist', component:CustomerCarddetailsListComponent,canActivate:[CustomerRouteGaurdService]},
  {path: 'customerbooking', component:CustomerBookingComponent,canActivate:[CustomerRouteGaurdService]},
  {path: 'customertransaction', component:CustomerTransactionComponent,canActivate:[CustomerRouteGaurdService]},
  {path: 'customerroomlist', component:CustomerRoomListComponent},
  {path: 'customerlogout', component:DashboardComponent},

  {path: 'makebooking', component:MakeBookingComponent}
];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes,{ enableTracing: false, scrollPositionRestoration: 'enabled' }),
    BrowserModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
