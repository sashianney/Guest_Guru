import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomCategory } from 'src/app/Entity/room-category';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.css']
})
export class AdminCategoryAddComponent 
{
  roomcategory: RoomCategory = {
    roomcategoryname: '',
    roomcategoryid: 0
  };
  constructor(
    private dataService: DataService,
    private router: Router
  ) {}
  onSubmit(userForm: NgForm) {
    // Check if the form is valid
    if (userForm.valid) this.dataService.addRoomCategory(this.roomcategory).subscribe(
      (response: RoomCategory) => {
       this.roomcategory=response;
       alert('Room service added successfully');
        console.log('Room service added successfully:', response);
        this.router.navigate(['admincategorylist']);

       
      },
      (error) => {
      
        console.error('Error adding room service:', error);

       
      }
    );
  }
}
