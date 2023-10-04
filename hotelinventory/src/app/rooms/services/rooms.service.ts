import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

//services is use to break your code depends on its purpose to make component.ts minimal
// all the business logic should be here
@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor() {}
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
      rating: 4.6,
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
      rating: 4.7,
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
      rating: 4.8,
    },
  ];

  getrooms() {
    return this.roomlist;
  }
}
