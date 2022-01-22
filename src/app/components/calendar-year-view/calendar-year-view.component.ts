import { Component, Input, OnInit } from '@angular/core';
import { isBefore, isAfter, isWeekend, isToday } from 'date-fns';
import { Days } from 'src/app/shared/data';
import { Calendar } from 'src/app/shared/models';

@Component({
  selector: 'app-calendar-year-view',
  templateUrl: './calendar-year-view.component.html',
  styleUrls: ['./calendar-year-view.component.scss'],
})
export class CalendarYearViewComponent implements OnInit {
  @Input() calendarData: Calendar;
  daysofWeek = Days;
  constructor() {}

  ngOnInit() {}

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

  asIsOrder() {
    return 1;
  }
}
