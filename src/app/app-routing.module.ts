import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarLandingComponent } from './components/calendar-landing/calendar-landing.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

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
  {
    path: '**',
    component: ErrorPageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
