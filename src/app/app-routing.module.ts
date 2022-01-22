import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarLandingComponent } from './components/calendar-landing/calendar-landing.component';
import { CalendarYearViewComponent } from './components/calendar-year-view/calendar-year-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/calendar',
    pathMatch: 'full',
  },
  {
    path: 'calendar/:year',
    component: CalendarLandingComponent,
  },
  {
    path: 'calendar',
    component: CalendarLandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
