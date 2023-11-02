import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { RoomsComponent } from './rooms/rooms.component';
import { LoginGuard } from 'src/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Login',
    pathMatch: 'full',
  },

  {
    path: 'Login',
    component: LoginComponent,
  },

  //all the components
  {
    path: '',
    component: AppNavComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'Student',
        loadChildren: () =>
          import('./modules/student/student.module').then(
            (m) => m.StudentModule
          ), // lazy loading
      },
      {
        path: 'Subject',
        loadChildren: () =>
          import('./modules/subject/subject.module').then(
            (m) => m.SubjectModule
          ),
      },
      {
        path: 'Rooms',
        component: RoomsComponent,
      },
    ],
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
