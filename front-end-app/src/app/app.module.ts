import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { GallerySectionComponent } from './gallery-section/gallery-section.component';
import { CallMeSectionComponent } from './call-me-section/call-me-section.component';
import { FooterComponent } from './footer/footer.component';

import { CallSectionFormServiceService  } from './call-section-form-service.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { SideBarComponent } from './admin/side-bar/side-bar.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { LoginedComponent } from './admin/logined/logined.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/logined', component: LoginedComponent }
]; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSectionComponent,
    AboutSectionComponent,
    GallerySectionComponent,
    CallMeSectionComponent,
    FooterComponent,
    UserComponent,
    AdminComponent,
    SideBarComponent,
    CustomersComponent,
    LoginedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule ,
    RouterModule.forRoot(routes)
  ],
  providers: [CallSectionFormServiceService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
