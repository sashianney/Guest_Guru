import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CopyrightComponent } from './component/guestguru/copyright/copyright.component';
import { FooterComponent } from './component/guestguru/footer/footer.component';
import { ListyourpropertyComponent } from './component/guestguru/listyourproperty/listyourproperty.component';
import { NavbarComponent } from './component/guestguru/navbar/navbar.component';
import { DashboardComponent } from './component/guestguru/dashboard/dashboard.component';
import { AboutComponent } from './component/guestguru/about/about.component';
import { ContactComponent } from './component/guestguru/contact/contact.component';
import { AdmindashboardComponent } from './component/admin/admindashboard/admindashboard.component';
import { AdminloginComponent } from './component/admin/adminlogin/adminlogin.component';
import { AdminsignupComponent } from './component/admin/adminsignup/adminsignup.component';
import { AdminHoteladminListComponent } from './component/admin/admin-hoteladmin-list/admin-hoteladmin-list.component';
import { AdminHoteldetailsListComponent } from './component/admin/admin-hoteldetails-list/admin-hoteldetails-list.component';
import { AdminCategoryAddComponent } from './component/admin/admin-category-add/admin-category-add.component';
import { AdminCategoryListComponent } from './component/admin/admin-category-list/admin-category-list.component';
import { AdminServiceListComponent } from './component/admin/admin-service-list/admin-service-list.component';
import { AdminServiceAddComponent } from './component/admin/admin-service-add/admin-service-add.component';
import { AdminUpdateComponent } from './component/admin/admin-update/admin-update.component';
import { AdminLogoutComponent } from './component/admin/admin-logout/admin-logout.component';
import { CustomerDashboardComponent } from './component/customer/customer-dashboard/customer-dashboard.component';
import { CustomerSignupComponent } from './component/customer/customer-signup/customer-signup.component';
import { CustomerLoginComponent } from './component/customer/customer-login/customer-login.component';
import { CustomerLogoutComponent } from './component/customer/customer-logout/customer-logout.component';
import { CustomerUpdateComponent } from './component/customer/customer-update/customer-update.component';
import { CustomerCarddetailsAddComponent } from './component/customer/customer-carddetails-add/customer-carddetails-add.component';
import { CustomerCarddetailsListComponent } from './component/customer/customer-carddetails-list/customer-carddetails-list.component';
import { HoteladminBankaccountAddComponent } from './component/hoteladmin/hoteladmin-bankaccount-add/hoteladmin-bankaccount-add.component';
import { HoteladminBankaccountListComponent } from './component/hoteladmin/hoteladmin-bankaccount-list/hoteladmin-bankaccount-list.component';
import { HoteladminDashboardComponent } from './component/hoteladmin/hoteladmin-dashboard/hoteladmin-dashboard.component';
import { HoteladminHotelAddComponent } from './component/hoteladmin/hoteladmin-hotel-add/hoteladmin-hotel-add.component';
import { HoteladminHotelListComponent } from './component/hoteladmin/hoteladmin-hotel-list/hoteladmin-hotel-list.component';
import { HoteladminHotelUpdateComponent } from './component/hoteladmin/hoteladmin-hotel-update/hoteladmin-hotel-update.component';
import { HoteladminLoginComponent } from './component/hoteladmin/hoteladmin-login/hoteladmin-login.component';
import { HoteladminLogoutComponent } from './component/hoteladmin/hoteladmin-logout/hoteladmin-logout.component';
import { HoteladminRoomAddComponent } from './component/hoteladmin/hoteladmin-room-add/hoteladmin-room-add.component';
import { HoteladminRoomListComponent } from './component/hoteladmin/hoteladmin-room-list/hoteladmin-room-list.component';
import { HoteladminRoomUpdateComponent } from './component/hoteladmin/hoteladmin-room-update/hoteladmin-room-update.component';
import { HoteladminSignupComponent } from './component/hoteladmin/hoteladmin-signup/hoteladmin-signup.component';
import { HoteladminUpdateComponent } from './component/hoteladmin/hoteladmin-update/hoteladmin-update.component';
import { HotelAdminListComponent } from './component/hoteladmin/hoteladmin-list/hoteladmin-list.component';
import { AdminListComponent } from './component/admin/admin-list/admin-list.component';
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { MakePaymentComponent } from './component/other-components/make-payment/make-payment.component';
import { MakeBookingComponent } from './component/other-components/make-booking/make-booking.component';
import { TermsAndConditionsComponent } from './component/guestguru/terms-and-conditions/terms-and-conditions.component';
import { CustomerBookingComponent } from './component/customer/customer-booking/customer-booking.component';
import { CustomerTransactionComponent } from './component/customer/customer-transaction/customer-transaction.component';
import { HoteladminCustomerBookingComponent } from './component/hoteladmin/hoteladmin-customer-booking/hoteladmin-customer-booking.component';
import { HoteladminCustomerTransactionComponent } from './component/hoteladmin/hoteladmin-customer-transaction/hoteladmin-customer-transaction.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { AdminCustomerListComponent } from './component/admin/admin-customer-list/admin-customer-list.component';
import { AdminHotelstatusUpdateComponent } from './component/admin/admin-hotelstatus-update/admin-hotelstatus-update.component';
import { AdminCustomerUpdateComponent } from './component/admin/admin-customer-update/admin-customer-update.component';
import { AdminHoteladminUpdateComponent } from './component/admin/admin-hoteladmin-update/admin-hoteladmin-update.component';
import { HoteladminRoomcategoryAddComponent } from './component/hoteladmin/hoteladmin-roomcategory-add/hoteladmin-roomcategory-add.component';
import { HoteladminRoomserviceAddComponent } from './component/hoteladmin/hoteladmin-roomservice-add/hoteladmin-roomservice-add.component';
import { CustomerRoomListComponent } from './component/customer/customer-room-list/customer-room-list.component';




@NgModule({
  declarations: [
    AppComponent,
    CopyrightComponent,
    FooterComponent,
    ListyourpropertyComponent,
    NavbarComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    AdmindashboardComponent,
    AdminloginComponent,
    AdminsignupComponent,
    AdminHoteladminListComponent,
    AdminHoteldetailsListComponent,
    CustomerListComponent,
    AdminCategoryAddComponent,
    AdminCategoryListComponent,
    AdminServiceListComponent,
    AdminServiceAddComponent,
    AdminUpdateComponent,
    AdminLogoutComponent,
    CustomerDashboardComponent,
    CustomerSignupComponent,
    CustomerLoginComponent,
    CustomerLogoutComponent,
    CustomerUpdateComponent,
    CustomerCarddetailsAddComponent,
    CustomerCarddetailsListComponent,
    HoteladminBankaccountAddComponent,
    HoteladminBankaccountListComponent,
    HoteladminDashboardComponent,
    HoteladminHotelAddComponent,
    HoteladminHotelListComponent,
    HoteladminHotelUpdateComponent,
    HoteladminLoginComponent,
    HoteladminLogoutComponent,
    HoteladminRoomAddComponent,
    HoteladminRoomListComponent,
    HoteladminRoomUpdateComponent,
    HoteladminSignupComponent,
    HoteladminUpdateComponent,
    HotelAdminListComponent,
    AdminListComponent,
    CustomerListComponent,
    MakePaymentComponent,
    MakeBookingComponent,
    TermsAndConditionsComponent,
    CustomerBookingComponent,
    CustomerTransactionComponent,
    HoteladminCustomerBookingComponent,
    HoteladminCustomerTransactionComponent,
    AdminCustomerListComponent,
    AdminHotelstatusUpdateComponent,
    AdminCustomerUpdateComponent,
    AdminHoteladminUpdateComponent,
    HoteladminRoomcategoryAddComponent,
    HoteladminRoomserviceAddComponent,
    CustomerRoomListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    CommonModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
