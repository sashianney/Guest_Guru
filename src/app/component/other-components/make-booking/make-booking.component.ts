import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingInformation } from 'src/app/Entity/booking-information';
import { DataService } from 'src/app/service/data.service';

declare var Razorpay:any;

@Component({
  selector: 'app-make-booking',
  templateUrl: './make-booking.component.html',
  styleUrls: ['./make-booking.component.css']
})
export class MakeBookingComponent implements OnInit {
  bookingId: number;
  customerid: number;
  roomid: number;
  hotelid: number;

  hotelname: any;
  numberofpeople: any;
  hotellocation: any;
  roomdescription: any;
  roomimageurl: any;
  price: number;
  totalamount: number; // null
  
  bookingInformation: any = {
    bookingid: 0,
    checkindate: new Date(),
    checkoutdate: new Date(),
    totalamount: 0
  };

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.customerid = Number(sessionStorage.getItem('customerid'));
    this.hotelid = Number(sessionStorage.getItem('hotelid'));
    this.roomid = Number(sessionStorage.getItem('roomid-booking'));
    this.price = Number(sessionStorage.getItem('price-booking'));
    this.hotelname = sessionStorage.getItem('hotelname-booking');
    this.numberofpeople = sessionStorage.getItem('numberofpeople-booking');
    this.hotellocation = sessionStorage.getItem('hotellocation-booking');
    this.roomdescription = sessionStorage.getItem('roomdescription-booking');
    this.roomimageurl = sessionStorage.getItem('roomimageurl-booking');

  }

  calculateTotalAmount() {
    const checkInDate = new Date(this.bookingInformation.checkindate);
    const checkOutDate = new Date(this.bookingInformation.checkoutdate);

    if (checkOutDate < checkInDate) {
      alert('Invalid date: Check-out date must be after check-in date');
      return;
    }

    this.totalamount = this.price;

    const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
    const numberOfDays = Math.floor(timeDifference / (1000 * 3600 * 24));

    if (numberOfDays >= 1) {
      this.totalamount = (numberOfDays + 1) * this.price; // Adding 1 day for inclusive calculation
    }
    console.log(`Total amount calculated: $${this.totalamount}`);
  }

  payNow(){
    this.calculateTotalAmount();
     const RazorpayOptions={
      description:"GuestGuru Payment",
      currency:'INR',
      amount: this.totalamount * 100,
      name:'GuestGuru',
      key:'rzp_test_wfSbOdujuA59pc',
      image:'http://localhost:4200/assets/GuestGuru.png',
       
      handler: (response:any) =>{
        
        this.processResponse(response);  
        if(response){
          this.onSubmit();
          this.router.navigate(['/customerdashboard'])
        }
        },
        prefill:{
          name:'customer name',
          contact:'1234567890',
          email:'guestgury02@gmail.com'
        },
        
      theme:{
        color:'#056df5'
      },
      modal:{
        ondismiss:()=>{
          console.log("dismissed"); 
        }
      } 
     }
     var razorPayObject=new Razorpay(RazorpayOptions);
        razorPayObject.open();

  }
  processResponse(response: any) {
    console.log(response);  
  }



  onSubmit() {
    //this.calculateTotalAmount();
    this.bookingInformation.totalamount = this.totalamount;

    this.dataService.addBookingInformation(this.bookingInformation).subscribe(
      (rawData: any) => {
        this.bookingId = rawData.bookingid;
        console.log('Booking information saved successfully.');
        this.setCustomeridHotelidAndroomid(this.bookingId);
        this.updateStatusAsFalse();
      },
      (error) => {
        console.error('Error saving booking information:', error);
      }
    );
  }

  setCustomeridHotelidAndroomid(bookingID: number) {
    this.dataService.setCustomeridHotelidAndroomid(this.bookingId, this.customerid, this.hotelid, this.roomid).subscribe(
      (data: any) => {

      }
    );
  }
  updateStatusAsFalse(){
    this.dataService.updateIsBookedStatusByRoomId(this.roomid).subscribe(
      data =>{
        console.log('Room status updated:');
        
      }
    )
  }
}
