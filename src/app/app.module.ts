import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarYearViewComponent } from './components/calendar-year-view/calendar-year-view.component';
import { SharedModule } from './shared/shared-components.module';
import { CalendarLandingComponent } from './components/calendar-landing/calendar-landing.component';

@NgModule({
  declarations: [AppComponent, CalendarYearViewComponent, CalendarLandingComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
