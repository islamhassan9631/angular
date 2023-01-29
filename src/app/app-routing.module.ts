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

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: "login", component:LoginComponent},
  {path:"forgotpassword", component:ForgotPasswordComponent},
  {path:'verify', component:VerifyResetCodeComponent},
  {path:'reset', component:ResetPasswordComponent},
  {path:'profile', component:ProfileComponent},
  {path:'profileclient', component:ProfileclientComponent},
  {path:'buliding',component:GetbulidingComponent},
  {path:'test', component:TestComponent ,data:{type:'post'}},
  {path:'test3', component:TestComponent,data:{type:'post2'}},
  {path:'addusers',component:AddusersComponent},
  {path:'addclinet',component:AddclinetComponent},
  {path:"getclinet", component:GetclinetComponent},
  {path:'getusers',component:GetusersComponent},
  {path:'getsingleuser/:id', component:GetsingleuserComponent},
  {path:'getsingleclient/:id', component:GetsingleclientComponent},
  {path:'gettransactions',component:GettransactionsComponent},
  {path:'getsingletransactions/:id', component:GetsingletransactionsComponent},
  {path:'addtransaction',component:AddtransactionComponent},
  {path:'getproject',component:GetprojectComponent},
  {path:'addproject',component:AddprojectComponent},
  {path:'getsingleproject/:id', component:GetsingleprojectComponent},
  {path:'getsigleproject/:projectId/getsinglebuilding/:id', component:GetsinglebuildingComponent},
  {path:'getsigleproject/:projectId/getsinglebuilding/:buildingId/getsinglebuild/:id',component:GetsinglebuildComponent},
  {path:'getsinglefloor/getsigleproject/:projectId/getsinglebuilding/:buildingId/:getsinglebuild/:buildId/:id',component:GetsinglefloorComponent},
  {path:'getsingleunit/getsinglefloor/getsigleproject/:projectId/getsinglebuilding/:buildingId/getsinglebuild/:buildId/floors/:floorId/:id', component:GetsingleunitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
