import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HoteladminHardCodedAuthenticationService {
  private authenticatedHoteladmin: { hoteladminemail: string; hoteladminpassword: string } | null = null;

  authenticated(email: string, password: string) {
   // Simulate fetching user data from a database or backend.
   // Replace this with your actual authentication logic.
       if (email === 'user@example.com' && password === 'password') 
       {
         sessionStorage.setItem('authenticatedHoteladmin', email);
         return true;
       } else {
         sessionStorage.removeItem('authenticatedHoteladmin');
         return false; // Return false to indica
       }
   }
   isHoteladminLoggedIn() {
     return sessionStorage.getItem('authenticatedHoteladmin') !== null;
   }
   getAuthenticatedHoteladmin() {
     return this.authenticatedHoteladmin;
   }
    hoteladminLogout() {
      //sessionStorage.removeItem('authenticatedHoteladmin'); // Correct the key here
      //sessionStorage.removeItem('hoteladminid');
      //sessionStorage.removeItem('hotelid');
      sessionStorage.clear();
    }
}
