import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from 'src/app/body/body.component';
import { LoginComponent } from 'src/app/login/login.component';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';
import { RoomsComponent } from 'src/app/rooms/rooms.component';
import { SidebarComponent } from 'src/app/sidebar/sidebar.component';
import { StudentCreateComponent } from 'src/app/studentlist/student-create/student-create.component';
import { StudentInformationComponent } from 'src/app/studentlist/student-information/student-information.component';
import { StudentUpdateComponent } from 'src/app/studentlist/student-update/student-update.component';
import { StudentlistComponent } from 'src/app/studentlist/studentlist.component';
import { SubbodyComponent } from 'src/app/subbody/subbody.component';

const routes: Routes = [
  {
    path: 'StudentCreate',
    component: StudentCreateComponent,
  },
  {
    path: 'StudateUpdate',
    component: StudentUpdateComponent,
  },

  {
    path: '',
    component: StudentlistComponent,
    children: [
      // {
      //   path: 'StudentCreate',
      //   component: StudentCreateComponent,
      // },
      // {
      //   path: ':id',
      //   component: StudentInformationComponent, // nested router place components inside of parent components
      // },
    ],
  },
  // {
  //   path: 'Body',
  //   component: BodyComponent,
  // },
  // {
  //   path: 'Sidebar',
  //   component: SidebarComponent,
  // },
  // {
  //   path: 'SubBody',
  //   component: SubbodyComponent,
  // },
  {
    path: 'studentInformation/:id',
    component: StudentInformationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
