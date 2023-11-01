import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { RoomsComponent } from 'src/app/rooms/rooms.component';
import { RoomListComponent } from 'src/app/rooms/room-list/room-list.component';
import { StudentlistComponent } from 'src/app/studentlist/studentlist.component';
import { StudentInformationComponent } from 'src/app/studentlist/student-information/student-information.component';
import { StudentCreateComponent } from 'src/app/studentlist/student-create/student-create.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SubbodyComponent } from 'src/app/subbody/subbody.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { BodyComponent } from 'src/app/body/body.component';

@NgModule({
  declarations: [
    BodyComponent,
    SubbodyComponent,
    HeaderComponent,
    FooterComponent,
    RoomsComponent,
    RoomListComponent,
    StudentlistComponent,
    StudentInformationComponent,
    StudentCreateComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatExpansionModule,
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [HeaderComponent], // it cant be access outside of this module
})
export class StudentModule {}
