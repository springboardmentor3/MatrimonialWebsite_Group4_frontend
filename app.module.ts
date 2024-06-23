import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './pages/register/register.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './pages/home/home.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from'@angular/material/icon';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotospageComponent } from './photospage/photospage.component';
import { CompleteprofileComponent } from './completeprofile/completeprofile.component';

import { VideoLoopComponent } from './components/video-loop/video-loop.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
// import { FamilyComponent } from './components/family/family.component';

import {MatDialogModule} from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MeetingFormComponent } from './pages/meeting-form/meeting-form.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { FetchrequestsComponent } from './components/fetchrequests/fetchrequests.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatStepperModule} from '@angular/material/stepper';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { AdminbarComponent } from './components/adminbar/adminbar.component';
import { AdminregisterComponent } from './pages/adminregister/adminregister.component';
import { AdmindeleteComponent } from './pages/admindelete/admindelete.component';
import { UpdatecandidateComponent } from './pages/updatecandidate/updatecandidate.component';
import { AdminupdateComponent } from './pages/adminupdate/adminupdate.component';
import {MatTableModule} from '@angular/material/table';
import { ProfileComponent } from './pages/profile/profile.component';
import { SendrequestsComponent } from './components/sendrequests/sendrequests.component';
import { SendComponent } from './pages/send/send.component';
import { ContactadminComponent } from './pages/contactadmin/contactadmin.component';
import { GetmessageComponent } from './pages/getmessage/getmessage.component';

import { GetreplyComponent } from './pages/getreply/getreply.component';
import { GetusersComponent } from './pages/getusers/getusers.component';
import { GetfavouritesComponent } from './pages/getfavourites/getfavourites.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RegisterComponent,
    HomeComponent,
    ForgotPasswordComponent,
    WelcomeComponent,
    NavbarComponent,
    SidebarComponent,
    PhotosComponent,
    PhotospageComponent,
    CompleteprofileComponent,
    VideoLoopComponent,
    DashboardComponent,
    LoginComponent,
    MyDialogComponent,
    MeetingFormComponent,
    RequestsComponent,
    FetchrequestsComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    AdminbarComponent,
    AdminregisterComponent,
    AdmindeleteComponent,
    UpdatecandidateComponent,
    AdminupdateComponent,
    ProfileComponent,
    SendrequestsComponent,
    SendComponent,
    ContactadminComponent,
    GetmessageComponent,

    GetreplyComponent,
      GetusersComponent,
      GetfavouritesComponent,
  
   
    // CompleteprofileComponent,
    
   
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatTabsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatDividerModule,
    MatStepperModule,
    MatTableModule,
   
   

  

  ],
  providers: [
    // authIntercepterProvider,
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
