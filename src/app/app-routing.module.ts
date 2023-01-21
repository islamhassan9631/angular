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

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: "login", component:LoginComponent},
  {path:'profile', component:ProfileComponent},
  {path:'buliding',component:GetbulidingComponent},
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
  {path:'getsingleproject/:id', component:GetsingleprojectComponent},
  {path:'getsigleproject/:projectId/getsinglebuilding/:id', component:GetsinglebuildingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
