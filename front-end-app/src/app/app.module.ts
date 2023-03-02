import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { GallerySectionComponent } from './gallery-section/gallery-section.component';

import { HttpClientModule } from '@angular/common/http';
import { CallMeSectionComponent } from './call-me-section/call-me-section.component';
import { FooterComponent } from './footer/footer.component';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
