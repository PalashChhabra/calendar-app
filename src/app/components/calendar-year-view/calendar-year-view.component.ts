import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  isValid,
  addDays,
  isBefore,
  isAfter,
  lastDayOfMonth,
  previousMonday,
  isWeekend,
  isToday,
} from 'date-fns';
import { YearService } from 'src/app/shared/services';
import { Days, MAX_DISPLAY_DAYS } from 'src/app/shared/data/days.data';
import { Calendar, CalendarDays, MonthData } from 'src/app/shared/models';

@Component({
  selector: 'app-calendar-year-view',
  templateUrl: './calendar-year-view.component.html',
  styleUrls: ['./calendar-year-view.component.scss'],
})
export class CalendarYearViewComponent implements OnInit {
  routeSubscription: Subscription;
  selectedYear: number;
  calendarData: Calendar;
  daysofWeek = Days;

  constructor(
    private route: ActivatedRoute,
    private yearService: YearService
  ) {}

  async ngOnInit() {
    //Get Year Param
    this.routeSubscription = this.route.params.subscribe((params) => {
      const dateParam = `${params?.year}-01-01`;
      if (params?.year && isValid(new Date(dateParam))) {
        this.selectedYear = +params?.year;
      } else {
        // set Current Year as default
        this.selectedYear = new Date().getFullYear();
      }
    });
    // populate data for selected year
    await this.populateYear(this.selectedYear);
    console.log(this.calendarData);
  }

  async populateYear(year: number) {
    this.calendarData = await this.yearService.populateYearData(year);
    Object.entries(this.calendarData[year]).forEach(async (entry) => {
      await this.generateCalendarDays(year, +entry[0]);
    });
  }

  async generateCalendarDays(year: number, monthIndex: number) {
    const firstDayOfMonth = new Date(this.selectedYear, monthIndex);
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

  getDateClass(date: Date, monthStartDate: Date, monthEndDate: Date) {
    if (isToday(date)) {
      return 'today-date';
    }
    if (isBefore(date, monthStartDate) || isAfter(date, monthEndDate)) {
      return 'other-month-date';
    }
    if (isWeekend(date)) {
      return 'weekend-date';
    }
    return 'month-date';
  }

  // TODO :: Can use this function to calculate first Monday
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

  asIsOrder() {
    return 1;
  }
}
