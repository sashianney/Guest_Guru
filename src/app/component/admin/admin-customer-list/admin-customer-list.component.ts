import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Entity/customer';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-customer-list',
  templateUrl: './admin-customer-list.component.html',
  styleUrls: ['./admin-customer-list.component.css']
})
export class AdminCustomerListComponent {
  customers: Customer[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;
  displayedCustomers: Customer[] = [];

  constructor(private router: Router, private dataservice: DataService) {}

  ngOnInit(): void {
    this.dataservice.getAllCustomer().subscribe((customerResponse: Customer[]) => {
      this.customers = customerResponse;
      this.updateDisplayedCustomers();
    });
  }

  updateCustomerById(customerid: number) {
    this.router.navigate(['admincustomerupdate', customerid]);
  }

  deleteCustomerById(customerid: number) {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.dataservice.deleteCustomerById(customerid).subscribe(() => {
        this.dataservice.getAllCustomer().subscribe((response: Customer[]) => {
          this.customers = response;
          this.updateDisplayedCustomers();
        });
      });
    }
  }

  setPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.updateDisplayedCustomers();
  }

  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.customers.length);
  }

  updateDisplayedCustomers() {
    this.displayedCustomers = this.customers.slice(this.startIndex, this.endIndex);
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
    return Math.ceil(this.customers.length / this.itemsPerPage);
  }

  getPages() {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
}
