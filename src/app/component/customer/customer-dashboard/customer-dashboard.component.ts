import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelInformation } from 'src/app/Entity/hotel-information';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  hotelInformation: HotelInformation[] = [];
  searchKeyword: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 3;
  displayedHotelDetails: HotelInformation[] = [];

  constructor(private router: Router, private dataservice: DataService) {}

  ngOnInit() {
    this.loadHotelData();
  }

  loadHotelData() {
    this.dataservice.getApprovedHotelStatus().subscribe((hotelInformationResponse: HotelInformation[]) => {
      this.hotelInformation = hotelInformationResponse;
      this.updateDisplayedHotelDetails();
    });
  }

  searchHotel() {
    if (this.searchKeyword.trim()!== '') {
      this.dataservice.searchHotelNameOrLocation(this.searchKeyword).subscribe(
        (hotelInformationResponse: HotelInformation[]) => {
          this.hotelInformation = hotelInformationResponse;
          this.updateDisplayedHotelDetails();
        }
      );
    } else {
      // If the searchKeyword is empty, reload all hotel data
      this.loadHotelData();
    }
  }

  getrooms(hotelid: number, hotelname: string, hotellocation: string) {
    sessionStorage.setItem('hotelname', hotelname);
    sessionStorage.setItem('hotelid', hotelid.toString());
    sessionStorage.setItem('hotellocation', hotellocation);
    this.router.navigate(['/customerroomlist']);
  }

  setPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.updateDisplayedHotelDetails();
  }

  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.hotelInformation.length);
  }

  updateDisplayedHotelDetails() {
    this.displayedHotelDetails = this.hotelInformation.slice(this.startIndex, this.endIndex);
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
    return Math.ceil(this.hotelInformation.length / this.itemsPerPage);
  }

  getPages() {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  changeItemsPerPage() {
    this.currentPage = 1;
    this.updateDisplayedHotelDetails();
  }
}
