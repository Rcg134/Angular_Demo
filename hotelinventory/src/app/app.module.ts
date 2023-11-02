import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestHttpInterceptor } from './request-http.interceptor';
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
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { EmailvalidatorDirective } from './validators/emailvalidator/emailvalidator.directive';
import { LoginServiceService } from './rooms/services/LoginService/login-service.service';
import { GenDialogComponent } from './dialog/gen-dialog/gen-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

// import { StudentModule } from './modules/student/student.module'; //For lazy loading
// import { StudentRoutingModule } from './modules/student/student-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    NotfoundComponent,
    LoginComponent,
    EmailvalidatorDirective,
    GenDialogComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    // StudentModule,
    AppRoutingModule, // if you have child route or custome module , this parent module must always place at the end of this imports
    // StudentRoutingModule,
    BrowserAnimationsModule,
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
    MatDialogModule,
  ],
  providers: [
    {
      //register your APP config provider
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    {
      // register interceptor
      provide: HTTP_INTERCEPTORS,
      useClass: RequestHttpInterceptor,
      multi: true,
    },
    LoginServiceService,
    RequestHttpInterceptor,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
