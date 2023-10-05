import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminHardCodedAuthenticationService {
  private authenticatedAdmin: { adminemail: string; adminpassword: string } | null = null;
 authenticated(email: string, password: string) {
  // Simulate fetching user data from a database or backend.
  // Replace this with your actual authentication logic.
      if (email === 'user@example.com' && password === 'password') 
      {
        sessionStorage.setItem('authenticatedAdmin', email);
        return true;
      } else {
        sessionStorage.removeItem('authenticatedAdmin');
        return false; // Return false to indica
      }
  }
  isAdminLoggedIn() {
    return sessionStorage.getItem('authenticatedAdmin') !== null;
  }
  getAuthenticatedAdmin() {
    return this.authenticatedAdmin;
  }
   adminLogout() {
    //sessionStorage.removeItem('authenticatedAdmin'); // Correct the key here
    //sessionStorage.removeItem('adminid'); // Correct the key here
    sessionStorage.clear();  
  }
}
