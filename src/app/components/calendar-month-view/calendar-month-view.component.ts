import { Component, Input, OnInit } from '@angular/core';
import { isToday, isBefore, isAfter, isWeekend } from 'date-fns';
import { Days } from 'src/app/shared/data';
import { MonthData } from 'src/app/shared/models';

@Component({
  selector: 'app-calendar-month-view',
  templateUrl: './calendar-month-view.component.html',
  styleUrls: ['./calendar-month-view.component.scss'],
})
export class CalendarMonthViewComponent implements OnInit {
  @Input() monthData: MonthData;
  @Input() selectedYear: number;

  daysofWeek = Days;
  constructor() {}

  ngOnInit(): void {}

  asIsOrder() {
    return 1;
  }

  getDateClass(date: Date, monthStartDate: Date, monthEndDate: Date) {
    let cssClassNames = 'month-date';
    if (isWeekend(date)) {
      cssClassNames = cssClassNames + ' ' + 'weekend-date';
    }
    if (isToday(date)) {
      cssClassNames = cssClassNames + ' ' + 'today-date';
    }
    if (isBefore(date, monthStartDate) || isAfter(date, monthEndDate)) {
      cssClassNames = cssClassNames + ' ' + 'other-month-date';
    }
    return cssClassNames;
  }
}
