import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FamilyComponent } from './family/family.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { GirlsComponent } from './girls/girls.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { BoysComponent } from './boys/boys.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FamilyComponent,
    ContactComponent,
    NewsComponent,
    EventsComponent,
    GirlsComponent,
    WomenComponent,
    MenComponent,
    BoysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
