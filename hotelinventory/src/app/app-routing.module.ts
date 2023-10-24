import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { BodyComponent } from './body/body.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SubbodyComponent } from './subbody/subbody.component';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StudentInformationComponent } from './studentlist/student-information/student-information.component';
import { StudentCreateComponent } from './studentlist/student-create/student-create.component';

const routes: Routes = [
  {
    path: 'Rooms',
    component: RoomsComponent,
  },
  {
    path: 'Student',
    component: StudentlistComponent,
  },
  {
    path: 'Body',
    component: BodyComponent,
  },
  {
    path: 'Sidebar',
    component: SidebarComponent,
  },
  {
    path: 'SubBody',
    component: SubbodyComponent,
  },
  {
    path: 'studentInformation/:id',
    component: StudentInformationComponent,
  },
  {
    path: 'StudentCreate',
    component: StudentCreateComponent,
  },
  {
    path: '404',
    component: NotfoundComponent,
  },
  {
    path: '',
    component: SubbodyComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
