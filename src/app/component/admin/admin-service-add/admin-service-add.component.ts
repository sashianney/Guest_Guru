import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/Entity/room-service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-service-add',
  templateUrl: './admin-service-add.component.html',
  styleUrls: ['./admin-service-add.component.css']
})
export class AdminServiceAddComponent 
{
  roomservices: RoomService = {
    roomservicename: '',
    roomserviceid: 0
  };
  //roomservice:RoomService;
  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  onSubmit(userForm: NgForm) {
    if (userForm.valid) this.dataService.addRoomService(this.roomservices).subscribe(
      (response: RoomService) => {
       this.roomservices=response;
       alert('Room service added successfully');
        console.log('Room service added successfully:', response);
        this.router.navigate(['adminservicelist']);
      },
      (error) => {
        console.error('Error adding room service:', error);
      }
    );
}
}
