import {
  Component,
  AfterContentInit,
  ContentChild,
  ViewChild,
  Self,
  Host,
} from '@angular/core';
import { RoomsComponent } from '../rooms/rooms.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'ake-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  providers: [RoomsService],
})
export class BodyComponent implements AfterContentInit {
  @ContentChild(RoomsComponent) roomscompo!: RoomsComponent;

  //using self is that services is expecting that you inlcude it on Providers propersties components line 8
  //@Skipself()
  //@Optional()
  //@Host() all the sub components will be able to use this service
  constructor(@Host() private roomsService: RoomsService) {}

  //if ever you need to change the child components use contentchild
  ngAfterContentInit(): void {
    this.roomscompo.numberofrooms = 12;
  }
}
