import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotelAdmin } from 'src/app/Entity/hotel-admin';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-hoteladmin-list',
  templateUrl: './admin-hoteladmin-list.component.html',
  styleUrls: ['./admin-hoteladmin-list.component.css']
})
export class AdminHoteladminListComponent {
  currentPage: number = 1; // Current page
  itemsPerPage: number = 6; // 2 rows x 3 columns
  displayedHotelAdmin: HotelAdmin[] = [];
  hotelAdmins: HotelAdmin[] = [];

  constructor(private router: Router, private dataservice: DataService) {}

  ngOnInit(): void {
    this.dataservice.getAllHotelAdmin().subscribe((hotelResponse: HotelAdmin[]) => {
      this.hotelAdmins = hotelResponse;
      this.updateDisplayedUsers();
    });
  }

  updateHotelAdminById(hoteladminid: number) {
    this.router.navigate(['adminhoteladminupdate', hoteladminid]);
  }

  deleteHotelAdminById(hoteladminid: number) {
    if (confirm('Are you sure you want to delete this hotel admin?')) {
      this.dataservice.deleteHotelAdminById(hoteladminid).subscribe(() => {
        this.dataservice.getAllHotelAdmin().subscribe((hotelResponse: HotelAdmin[]) => {
          this.hotelAdmins = hotelResponse;
          this.updateDisplayedUsers();
        });
      });
    }
  }

  setPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.updateDisplayedUsers();
  }

  // Calculate the start and end indices of the displayed data
  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.hotelAdmins.length);
  }

  // Update the displayedHotelAdmin array based on the current page
  updateDisplayedUsers() {
    this.displayedHotelAdmin = this.hotelAdmins.slice(this.startIndex, this.endIndex);
  }

  // Function to go to the previous page
  prevPage() {
    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
  }

  // Function to go to the next page
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.setPage(this.currentPage + 1);
    }
  }

  // Calculate the total number of pages
  get totalPages() {
    return Math.ceil(this.hotelAdmins.length / this.itemsPerPage);
  }

  // Generate an array of page numbers for the pagination controls
  getPages() {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  // Function to handle the change in items per page
  changeItemsPerPage() {
    this.currentPage = 1; // Reset to the first page
    this.updateDisplayedUsers();
  }
}
