import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerHardCodedAuthenticationService {
  private authenticatedCustomer: { customeremail: string; customerpassword: string } | null = null;

  authenticated(email: string, password: string) {
   // Simulate fetching user data from a database or backend.
   // Replace this with your actual authentication logic.
       if (email === 'user@example.com' && password === 'password') 
       {
         sessionStorage.setItem('authenticatedCustomer', email);
         return true;
       } else {
         sessionStorage.removeItem('authenticatedCustomer');
         return false; // Return false to indica
       }
   }
   isCustomerLoggedIn() {
     return sessionStorage.getItem('authenticatedCustomer') !== null;
   }
   getAuthenticatedCustomer() {
     return this.authenticatedCustomer;
   }
    customerLogout() {
      //sessionStorage.removeItem('authenticatedCustomer'); // Correct the key here
      //sessionStorage.removeItem('customerid');
      sessionStorage.clear();
    }
}
