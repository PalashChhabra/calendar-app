import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isValid, previousMonday, addDays } from 'date-fns';
import { Subscription } from 'rxjs';
import {
  DateChangeTypes,
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
  dateChangeTypes = DateChangeTypes;

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
    this.calendarData = await this.populateNextYearsData(this.selectedYear);
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  async populateNextYearsData(year: number) {
    let loadedData: Calendar = {};
    do {
      const yearToLoad = year + this.yearsLoaded;
      loadedData = await this.populateYear(yearToLoad);
      this.yearsLoaded++;
    } while (this.yearsLoaded <= EXTRA_YEARS_TO_LOAD);
    return loadedData;
  }

  async populateYear(year: number) {
    let data: Calendar = {};
    await this.yearService.populateYearData(year).then((calendarData) => {
      data = calendarData;
      Object.entries(calendarData[year]).forEach(async (entry) => {
        data = await this.generateCalendarDays(data, year, +entry[0]);
      });
    });
    return data;
  }

  async generateCalendarDays(
    calendarData: Calendar,
    year: number,
    monthIndex: number
  ) {
    const firstDayOfMonth = new Date(year, monthIndex);

    //get Starting date of previous Month
    const startDatePrevMonth = previousMonday(firstDayOfMonth);

    let dateCounter = startDatePrevMonth;
    calendarData[year][monthIndex].calendarDays = {
      nextMonthDays: [],
      previousMonthDays: [],
      currentMonthDays: [],
      allDays: [],
    } as CalendarDays;

    for (let i = 1; i <= MAX_DISPLAY_DAYS; i++) {
      calendarData[year][monthIndex].calendarDays?.allDays.push(dateCounter);
      dateCounter = addDays(dateCounter, 1);
    }
    return calendarData;
  }

  onViewChanged(selectedView: number) {
    this.viewIndex = selectedView;
  }

  async changeDate(changeType: DateChangeTypes) {
    const currentView = this.viewIndex;
    //Year View
    if (currentView === ViewTypes['Year']) {
      let dataYearToLoad = this.selectedYear;
      if (changeType === DateChangeTypes['Previous']) {
        this.selectedYear = this.selectedYear - 1;
        dataYearToLoad = this.selectedYear;
      } else if (changeType === DateChangeTypes['Today']) {
        this.selectedYear = new Date().getFullYear();
        dataYearToLoad = this.selectedYear;
      } else if (changeType === DateChangeTypes['Next']) {
        this.selectedYear = this.selectedYear + 1;
        dataYearToLoad = this.selectedYear + EXTRA_YEARS_TO_LOAD;
      }

      const data = await this.populateYear(dataYearToLoad);
      let startPosition = Object.keys(data).indexOf(`${this.selectedYear}`);
      let endPosition = startPosition + EXTRA_YEARS_TO_LOAD + 1;

      this.calendarData = await this.sliceCalendarData(
        data,
        startPosition,
        endPosition
      );
    }
  }

  async sliceCalendarData(
    data: Calendar,
    startPosition: number,
    endPosition: number
  ) {
    const sliced = Object.keys(data)
      .slice(startPosition, endPosition)
      .reduce((result: any, key: any) => {
        result[key] = data[key];
        return result;
      }, {});
    return sliced;
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
