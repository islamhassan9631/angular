import { AuthGuardService } from './servies/auth-guard-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



import { UserComponent } from './component/user/user.component';
import { BuildingComponent } from './component/building/building.component';
import { AddusersComponent } from './component/addusers/addusers.component';
import { AddclinetComponent } from './component/addclinet/addclinet.component';
import { AddbulidComponent } from './component/addbulid/addbulid.component';
import { AddfloorComponent } from './component/addfloor/addfloor.component';
import { AddunitComponent } from './component/addunit/addunit.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { UserService } from './servies/user.service';
import { AuthService } from './servies/auth.service';
// import{ CustomerService } from './servies/customer.service';
import { TokenService } from './servies/token.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
import { GetsinglebuildComponent } from './component/getsinglebuild/getsinglebuild.component';
import { AddprojectComponent } from './component/addproject/addproject.component';
import { GetsinglefloorComponent } from './component/getsinglefloor/getsinglefloor.component';
import { GetsingleunitComponent } from './component/getsingleunit/getsingleunit.component';
import { ProfileclientComponent } from './pages/profileclient/profileclient.component';
import { TestComponent } from './component/test/test.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VerifyResetCodeComponent } from './component/verify-reset-code/verify-reset-code.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { Test2Component } from './component/test2/test2.component';

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
    GetsinglebuildingComponent,
    GetsinglebuildComponent,
    AddprojectComponent,
    GetsinglefloorComponent,
    GetsingleunitComponent,
    ProfileclientComponent,
    TestComponent,
    ForgotPasswordComponent,
    VerifyResetCodeComponent,
    ResetPasswordComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    PdfViewerModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    
    
  ],
  providers: [
    UserService,
    AuthService,
    AuthGuardService,
   
    
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
