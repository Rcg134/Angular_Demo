import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'ake-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent {
  //Recieve value from parent components , waiting for some components to pass the data
  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom: EventEmitter<RoomList> = new EventEmitter<RoomList>();

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
