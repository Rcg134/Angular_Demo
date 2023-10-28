import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'Student',
    loadChildren: () =>
      import('./modules/student/student.module').then((m) => m.StudentModule), // lazy loading
  },
  {
    path: 'Rooms',
    component: RoomsComponent,
  },
  {
    path: '404',
    component: NotfoundComponent,
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
