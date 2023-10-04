import {
  Component,
  AfterContentInit,
  ContentChild,
  ViewChild,
} from '@angular/core';
import { RoomsComponent } from '../rooms/rooms.component';

@Component({
  selector: 'ake-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements AfterContentInit {
  @ContentChild(RoomsComponent) roomscompo!: RoomsComponent;

  //if ever you need to change the child components use contentchild
  ngAfterContentInit(): void {
    this.roomscompo.numberofrooms = 12;
  }
}
