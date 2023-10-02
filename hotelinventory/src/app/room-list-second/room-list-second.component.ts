import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';
import { RoomListComponent } from '../rooms/room-list/room-list.component';
import { RoomsComponent } from '../rooms/rooms.component';

@Component({
  selector: 'ake-room-list-second',
  templateUrl: './room-list-second.component.html',
  styleUrls: ['./room-list-second.component.scss'],
})
export class RoomListSecondComponent implements OnInit, AfterViewInit {
  //To reuse components dynamically like view
  @ViewChild('roomListTable', { static: true }) roomTable!: ElementRef;
  //Initialization
  @ViewChild(RoomsComponent) roomCom!: RoomsComponent;

  // iterate the components
  @ViewChildren(RoomsComponent) roomIterate!: QueryList<RoomsComponent>;

  ngOnInit(): void {
    this.roomTable.nativeElement.innerText = 'wow';
  }
  ngAfterViewInit(): void {
    console.log(this.roomIterate);
  }
}
