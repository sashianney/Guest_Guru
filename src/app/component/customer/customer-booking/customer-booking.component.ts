import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-customer-booking',
  templateUrl: './customer-booking.component.html',
  styleUrls: ['./customer-booking.component.css']
})
export class CustomerBookingComponent implements OnInit {
  bookingInformation: any[] = [];
  customerid: number;
  currentPage: number = 1;
  itemsPerPage: number = 5; // Number of items to display per page

  buttondissable:boolean=true;
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.customerid = Number(sessionStorage.getItem('customerid'));
    this.loadBookingData();
  }

  loadBookingData() {
    this.dataService.getAllBookingInformationByCustomerId(this.customerid).subscribe(
      (bookingResponse: any[]) => {
        this.bookingInformation = bookingResponse;
      }
    );
  }
  setPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.bookingInformation.length);
  }

  get pagedBookingData() {
    return this.bookingInformation.slice(this.startIndex, this.endIndex);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.setPage(this.currentPage + 1);
    }
  }

  get totalPages() {
    return Math.ceil(this.bookingInformation.length / this.itemsPerPage);
  }

  getPages() {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
}
