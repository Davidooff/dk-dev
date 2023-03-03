import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSectionComponent,
    AboutSectionComponent,
    GallerySectionComponent,
    CallMeSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CallSectionFormServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
