import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarYearViewComponent } from './components/calendar-year-view/calendar-year-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/calendar',
    pathMatch: 'full',
  },
  {
    path: 'calendar/:year',
    component: CalendarYearViewComponent,
  },
  {
    path: 'calendar',
    component: CalendarYearViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
