import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { BodyComponent } from './body/body.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SubbodyComponent } from './subbody/subbody.component';
import { AppComponent } from './app.component';

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
    path: '',
    component: SubbodyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
