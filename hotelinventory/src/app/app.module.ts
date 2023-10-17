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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, // setting up http client module
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
