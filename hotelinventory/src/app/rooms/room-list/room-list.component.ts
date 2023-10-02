import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'ake-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomListComponent implements OnChanges {
  //Recieve value from parent components , waiting for some components to pass the data
  @Input() rooms: RoomList[] = [];

  @Input() message_Update: string = '';

  @Output() selectedRoom: EventEmitter<RoomList> = new EventEmitter<RoomList>();

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //it ise if there are changes in this components
  }
}
