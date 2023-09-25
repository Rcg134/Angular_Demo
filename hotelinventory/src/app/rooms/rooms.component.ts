import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'ake-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Russel Hotel';

  numberofrooms = 10;

  hiderooms: boolean = false;

  rooms: Room = { availableRooms: 10, bookedRooms: 5, totalRooms: 15 };

  roomlist: RoomList[] = [
    {
      roomnumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air condition , Free wifi, TV ,Bathroom, Kitchen',
      price: 500,
      photos:
        'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp',
      checkinTime: new Date('31-Oct-2023'),
      checkoutTime: new Date('1-Nov-2023'),
    },
    {
      roomnumber: 2,
      roomType: 'Deluxe Room 2',
      amenities: 'Air condition , Free wifi, TV ,Bathroom, Kitchen',
      price: 1000,
      photos:
        'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp',
      checkinTime: new Date('31-Oct-2023'),
      checkoutTime: new Date('1-Nov-2023'),
    },
    {
      roomnumber: 3,
      roomType: 'Deluxe Room 3',
      amenities: 'Air condition , Free wifi, TV ,Bathroom, Kitchen',
      price: 2000,
      photos:
        'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp',
      checkinTime: new Date('31-Oct-2023'),
      checkoutTime: new Date('1-Nov-2023'),
    },
  ];

  toggle() {
    let hideroom = this.hiderooms === true ? false : true;

    this.hiderooms = hideroom;
  }

  count() {
    this.numberofrooms += 1;
  }
}
