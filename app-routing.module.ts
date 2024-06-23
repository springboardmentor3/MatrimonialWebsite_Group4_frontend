import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';

import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CompleteprofileComponent } from './completeprofile/completeprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { MeetingFormComponent } from './pages/meeting-form/meeting-form.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { AdminregisterComponent } from './pages/adminregister/adminregister.component';
import { AdmindeleteComponent } from './pages/admindelete/admindelete.component';
import { AdminupdateComponent } from './pages/adminupdate/adminupdate.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SendComponent } from './pages/send/send.component';
import { ContactadminComponent } from './pages/contactadmin/contactadmin.component';
import { GetmessageComponent } from './pages/getmessage/getmessage.component';
import { GetreplyComponent } from './pages/getreply/getreply.component';
import { GetusersComponent } from './pages/getusers/getusers.component';
import { GetfavouritesComponent } from './pages/getfavourites/getfavourites.component';




const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch : 'full',
  },
  {
    path:'register',
    component:RegisterComponent,
    pathMatch:'full',
  },
 
  {
    path:'forgotpassword',
    component:ForgotPasswordComponent,
    pathMatch: 'full',
  },
  {
    path:'welcome',
    component:WelcomeComponent,
    pathMatch: 'full',
  },
  {
    path:'completeprofile',
    component:CompleteprofileComponent,
    pathMatch:'full',
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path:'meeting-form/:rid',
    component:MeetingFormComponent,
    pathMatch:'full',
  },
  {
    path:'requests',
    component:RequestsComponent,
    pathMatch:'full',
  },
  {
    path:'adminlogin',
    component:AdminloginComponent,
    pathMatch:'full',
  },
  {
    path:'admindashboard',
    component:AdmindashboardComponent,
    pathMatch:'full',
  },{
    path:'adminregister',
    component:AdminregisterComponent,
    pathMatch:'full',
  },
  {
    path:'admindelete',
    component:AdmindeleteComponent,
    pathMatch:'full',
  },
  {
    path:'adminupdate',
    component:AdminupdateComponent,
    pathMatch:'full',
  },
  {
    path:'profile/:rid',
    component:ProfileComponent,
    pathMatch:'full',
  },
  {
    path:'send',
    component:SendComponent,
    pathMatch:'full',

  },
  {
    path:'contact',
    component:ContactadminComponent,
    pathMatch:'full',


  },
  {
    path:'getmessage',
    component:GetmessageComponent,
    pathMatch:'full',


  },
  {
    path:'getreply',
    component:GetreplyComponent,
    pathMatch:'full',

  },
  {
    path:'getusers',
    component:GetusersComponent,
    pathMatch:'full',

  },
  {
    path:'getfavourites',
    component:GetfavouritesComponent,
    pathMatch:'full',

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
