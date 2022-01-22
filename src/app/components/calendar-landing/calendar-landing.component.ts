import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isValid, previousMonday, addDays } from 'date-fns';
import { Subscription } from 'rxjs';
import {
  Days,
  EXTRA_YEARS_TO_LOAD,
  MAX_DISPLAY_DAYS,
  ViewTypes,
} from 'src/app/shared/data';
import { Calendar, CalendarDays } from 'src/app/shared/models';
import { YearService } from 'src/app/shared/services';

@Component({
  selector: 'app-calendar-landing',
  templateUrl: './calendar-landing.component.html',
  styleUrls: ['./calendar-landing.component.scss'],
})
export class CalendarLandingComponent implements OnInit, OnDestroy {
  viewTypes = ViewTypes;
  viewIndex: number = ViewTypes['Year'];

  routeSubscription: Subscription;
  selectedYear: number;
  calendarData: Calendar;
  yearsLoaded = 0;

  constructor(
    private route: ActivatedRoute,
    private yearService: YearService
  ) {}

  async ngOnInit() {
    //Get Year Param
    this.routeSubscription = this.route.params.subscribe((params) => {
      const dateParam = `${params?.year}-01-01`;
      if (params?.year && isValid(new Date(dateParam)) && +params?.year > 0) {
        this.selectedYear = +params?.year;
      } else {
        // set Current Year as default
        this.selectedYear = new Date().getFullYear();
      }
    });
    // populate data for selected year
    await this.populateYear(this.selectedYear);
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  async populateYear(year: number) {
    if (this.yearsLoaded > EXTRA_YEARS_TO_LOAD) {
      return;
    }
    await this.yearService.populateYearData(year).then((calendarData) => {
      this.calendarData = calendarData;
      Object.entries(calendarData[year]).forEach(async (entry) => {
        await this.generateCalendarDays(year, +entry[0]);
      });
    });

    this.yearsLoaded++;
    this.populateYear(year + 1);
  }

  async generateCalendarDays(year: number, monthIndex: number) {
    const firstDayOfMonth = new Date(year, monthIndex);

    //get Starting date of previous Month
    const startDatePrevMonth = previousMonday(firstDayOfMonth);

    let dateCounter = startDatePrevMonth;
    this.calendarData[year][monthIndex].calendarDays = {
      nextMonthDays: [],
      previousMonthDays: [],
      currentMonthDays: [],
      allDays: [],
    } as CalendarDays;

    for (let i = 1; i <= MAX_DISPLAY_DAYS; i++) {
      this.calendarData[year][monthIndex].calendarDays?.allDays.push(
        dateCounter
      );
      dateCounter = addDays(dateCounter, 1);
    }
  }

  OnViewChanged(selectedView: number) {
    this.viewIndex = selectedView;
  }

  // Can do Later :: Can use this function to calculate first Monday
  /*
  getPrevMonthMonday(selectedDate: Date) {
    const getPreviousMonthLastDay = new Date(selectedDate.setDate(0));

    let prevMonthDay = getPreviousMonthLastDay;
    //get First Monday of Previous Month
    if (prevMonthDay.getDay() !== Days['Monday']) {
      do {
        prevMonthDay = new Date(
          prevMonthDay.setDate(prevMonthDay.getDate() - 1)
        );
      } while (prevMonthDay.getDay() != Days['Monday']);
    }

    return prevMonthDay;
  }
  */
}
