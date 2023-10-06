import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
  ViewChildren,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'ake-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  numberofrooms = 10;
  hiderooms: boolean = false;
  message: string = 'Room List';
  rooms: Room = { availableRooms: 10, bookedRooms: 5, totalRooms: 15 };
  roomlist: RoomList[] = [];

  //service variable must be private so that it cant access in template
  //inject service
  constructor(private roomsService: RoomsService) {
    this.roomlist = roomsService.getrooms();
  }

  // to have an access to header component (Initialization)
  // @ViewChild(HeaderComponent)
  // headercomponent: HeaderComponent = new HeaderComponent();

  ngOnInit(): void {
    // const user = {
    //   name: 'John',
    //   email: 'john@example.com',
    // };
    // localStorage.setItem('user', JSON.stringify(user));
  }

  toggle() {
    let hideroom = this.hiderooms === true ? false : true;

    this.hiderooms = hideroom;
  }

  count() {
    this.numberofrooms += 1;
  }

  selectRoom(room: RoomList) {
    alert(room.roomnumber);
  }

  addRoom() {
    const addRoom: RoomList = {
      roomnumber: 4,
      roomType: 'Deluxe Room 4',
      amenities: 'Air condition , Free wifi, TV ,Bathroom, Kitchen',
      price: 2000,
      photos:
        'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp',
      checkinTime: new Date('2-Oct-2023'),
      checkoutTime: new Date('23-Nov-2023'),
      rating: 5.0,
    };

    // this.roomlist.push(addRoom);

    //Use this so that whenever there is a changes, there are only specific components that is affected
    // passing new instance always
    this.roomlist = [...this.roomlist, addRoom];
    // this.message = 'inserted';
  }

  // after  ngOnInit() this aftervewInit will be next
  ngAfterViewInit(): void {
    // this.headercomponent.header = 'nabago';
  }

  ngAfterViewChecked(): void {}
}
