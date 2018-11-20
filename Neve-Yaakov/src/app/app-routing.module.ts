import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { NewsComponent } from './news/news.component';
import { FamilyComponent } from './family/family.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { BoysComponent } from './boys/boys.component';
import { GirlsComponent } from './girls/girls.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'family',
    component: FamilyComponent
  },
  {
    path: 'women',
    component: WomenComponent
  },
  {
    path: 'men',
    component: MenComponent
  },
  {
    path: 'boys',
    component: BoysComponent
  },
  {
    path: 'girls',
    component: GirlsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
