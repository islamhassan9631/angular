import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { VerifyResetCodeComponent } from './component/verify-reset-code/verify-reset-code.component';
import { ProfileclientComponent } from './pages/profileclient/profileclient.component';
import { GetsinglebuildComponent } from './component/getsinglebuild/getsinglebuild.component';
import { AddtransactionComponent } from './component/addtransaction/addtransaction.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddclinetComponent } from './component/addclinet/addclinet.component';
import { AddusersComponent } from './component/addusers/addusers.component';
import { BuildingComponent } from './component/building/building.component';
import { GetbulidingComponent } from './component/getbuliding/getbuliding.component';
import { GetclinetComponent } from './component/getclinet/getclinet.component';
import { GetsingleclientComponent } from './component/getsingleclient/getsingleclient.component';
import { GetsingletransactionsComponent } from './component/getsingletransactions/getsingletransactions.component';
import { GetsingleuserComponent } from './component/getsingleuser/getsingleuser.component';
import { GettransactionsComponent } from './component/gettransactions/gettransactions.component';
import { GetusersComponent } from './component/getusers/getusers.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { GetprojectComponent } from './component/getproject/getproject.component';
import { GetsingleprojectComponent } from './component/getsingleproject/getsingleproject.component';
import { GetsinglebuildingComponent } from './component/getsinglebuilding/getsinglebuilding.component';
import { AddprojectComponent } from './component/addproject/addproject.component';
import { GetsinglefloorComponent } from './component/getsinglefloor/getsinglefloor.component';
import { GetsingleunitComponent } from './component/getsingleunit/getsingleunit.component';
import { TestComponent } from './component/test/test.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { AuthGuardService } from './servies/auth-guard-service.service';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: "login", component:LoginComponent},
  {path:"forgotpassword", component:ForgotPasswordComponent},
  {path:'verify', component:VerifyResetCodeComponent},
  {path:'reset', component:ResetPasswordComponent},
  {path:'profile', component:ProfileComponent,canActivate:[AuthGuardService]},
  {path:'profileclient', component:ProfileclientComponent,canActivate:[AuthGuardService]},
  {path:'buliding',component:GetbulidingComponent,canActivate:[AuthGuardService]},
  {path:'test', component:TestComponent ,data:{type:'post'}},
  {path:'test3', component:TestComponent,data:{type:'post2'}},
  {path:'addusers',component:AddusersComponent,canActivate:[AuthGuardService]},
  {path:'addclinet',component:AddclinetComponent,canActivate:[AuthGuardService]},
  {path:"getclinet", component:GetclinetComponent,canActivate:[AuthGuardService]},
  {path:'getusers',component:GetusersComponent,canActivate:[AuthGuardService]},
  {path:'getsingleuser/:id', component:GetsingleuserComponent,canActivate:[AuthGuardService]},
  {path:'getsingleclient/:id', component:GetsingleclientComponent,canActivate:[AuthGuardService]},
  {path:'gettransactions',component:GettransactionsComponent,canActivate:[AuthGuardService]},
  {path:'getsingletransactions/:id', component:GetsingletransactionsComponent,canActivate:[AuthGuardService]},
  {path:'addtransaction',component:AddtransactionComponent,canActivate:[AuthGuardService]},
  {path:'getproject',component:GetprojectComponent,canActivate:[AuthGuardService]},
  {path:'addproject',component:AddprojectComponent,canActivate:[AuthGuardService]},
  {path:'getsingleproject/:id', component:GetsingleprojectComponent,canActivate:[AuthGuardService]},
  {path:'getsigleproject/:projectId/getsinglebuilding/:id', component:GetsinglebuildingComponent,canActivate:[AuthGuardService]},
  {path:'getsigleproject/:projectId/getsinglebuilding/:buildingId/getsinglebuild/:id',component:GetsinglebuildComponent,canActivate:[AuthGuardService]},
  {path:'getsinglefloor/getsigleproject/:projectId/getsinglebuilding/:buildingId/:getsinglebuild/:buildId/:id',component:GetsinglefloorComponent,canActivate:[AuthGuardService]},
  {path:'getsingleunit/getsinglefloor/getsigleproject/:projectId/getsinglebuilding/:buildingId/getsinglebuild/:buildId/floors/:floorId/:id', component:GetsingleunitComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
