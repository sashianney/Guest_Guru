import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotelInformation } from 'src/app/Entity/hotel-information';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-hoteldetails-list',
  templateUrl: './admin-hoteldetails-list.component.html',
  styleUrls: ['./admin-hoteldetails-list.component.css']
})
export class AdminHoteldetailsListComponent {
  hotelInformation: HotelInformation[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 3;
  displayedHotelDetails: HotelInformation[] = [];

  constructor(private router: Router, private dataservice: DataService) {}

  ngOnInit() {
    this.dataservice.getPendingHotelStatus().subscribe(
      (hotelInformationResponse: HotelInformation[]) => {
      this.hotelInformation = hotelInformationResponse;
      this.updateDisplayedHotelDetails();
    });
  }

  editFunction(hotelid: number) {
    console.log('Updated data with id' + hotelid);
    this.router.navigate(['adminhotelstatusupdate', hotelid]);
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
