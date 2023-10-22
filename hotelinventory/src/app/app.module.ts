import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { HeaderComponent } from './header/header.component';
import { RoomListSecondComponent } from './room-list-second/room-list-second.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { RequestHttpInterceptor } from './request-http.interceptor';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SubbodyComponent } from './subbody/subbody.component';
import { MatButtonModule } from '@angular/material/button';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { NotfoundComponent } from './notfound/notfound.component';
import { StudentInformationComponent } from './studentlist/student-information/student-information.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomListComponent,
    HeaderComponent,
    RoomListSecondComponent,
    FooterComponent,
    BodyComponent,
    StudentlistComponent,
    SidebarComponent,
    SubbodyComponent,
    AppNavComponent,
    NotfoundComponent,
    StudentInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, // setting up http client module
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatExpansionModule,
    MatMenuModule,
  ],
  providers: [
    {
      //register your APP config provider
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    {
      // register iterceptor
      provide: HTTP_INTERCEPTORS,
      useClass: RequestHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
