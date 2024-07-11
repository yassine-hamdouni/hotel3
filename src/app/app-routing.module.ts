import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'contactus', component: ContactusComponent },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // This line enables scroll position restoration
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
