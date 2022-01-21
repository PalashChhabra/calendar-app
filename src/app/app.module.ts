import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarYearViewComponent } from './components/calendar-year-view/calendar-year-view.component';
import { EnumArrayPipe, SplitDaysPipe } from './shared/pipes';

@NgModule({
  declarations: [
    AppComponent,
    CalendarYearViewComponent,
    EnumArrayPipe,
    SplitDaysPipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
