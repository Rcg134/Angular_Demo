import { Component , AfterContentInit, ContentChild , ViewChild } from '@angular/core';
import { RoomsComponent } from '../rooms/rooms.component';

@Component({
  selector: 'ake-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements AfterContentInit {
  @ContentChild(RoomsComponent) roomscompo!: RoomsComponent;
  
  ngAfterContentInit(): void {
    this.roomscompo.numberofrooms = 12;
  }

}
