import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AboutComponent } from './component/about/about.component';
import { SomeworkComponent } from './component/somework/somework.component';
import { ConnectComponent } from './component/connect/connect.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserComponent } from './component/user/user.component';
import { BuildingComponent } from './component/building/building.component';
import { AddusersComponent } from './component/addusers/addusers.component';
import { AddclinetComponent } from './component/addclinet/addclinet.component';
import { AddbulidComponent } from './component/addbulid/addbulid.component';
import { AddfloorComponent } from './component/addfloor/addfloor.component';
import { AddunitComponent } from './component/addunit/addunit.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { UserService } from './servies/user.service';
import { AuthService } from './servies/auth.service';
import { TokenService } from './servies/token.service';
import { GetbulidingComponent } from './component/getbuliding/getbuliding.component';
import { BulidService } from './servies/bulid.service';
import { ClientService } from './servies/client.service';
import { GetclinetComponent } from './component/getclinet/getclinet.component';
import { GetusersComponent } from './component/getusers/getusers.component';
import { GetsingleuserComponent } from './component/getsingleuser/getsingleuser.component';
import { GetsingleclientComponent } from './component/getsingleclient/getsingleclient.component';
import { GetsingletransactionsComponent } from './component/getsingletransactions/getsingletransactions.component';
import { GettransactionsComponent } from './component/gettransactions/gettransactions.component';
import { TransactionsService } from './servies/transactions.service';
import { AddtransactionComponent } from './component/addtransaction/addtransaction.component';
import { GetprojectComponent } from './component/getproject/getproject.component';
import { GetsingleprojectComponent } from './component/getsingleproject/getsingleproject.component';
import { GetsinglebuildingComponent } from './component/getsinglebuilding/getsinglebuilding.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    SomeworkComponent,
    ConnectComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    UserComponent,
    BuildingComponent,
    AddusersComponent,
    AddclinetComponent,
    AddbulidComponent,
    AddfloorComponent,
    AddunitComponent,
    GetbulidingComponent,
    GetclinetComponent,
    GetusersComponent,
    GetsingleuserComponent,
    GetsingleclientComponent,
    GetsingletransactionsComponent,
    GettransactionsComponent,
    AddtransactionComponent,
    GetprojectComponent,
    GetsingleprojectComponent,
    GetsinglebuildingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [
    UserService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:TokenService,
      multi: true
    },
    BulidService,
    ClientService,
    TransactionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
