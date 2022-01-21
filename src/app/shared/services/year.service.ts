import { Injectable } from '@angular/core';
import { Months } from '../data';
import { Calendar, MonthData } from '../models';
import { getDaysInMonth, lastDayOfMonth } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class YearService {
  data: Calendar = {};

  constructor() {}

  async populateYearData(year: number) {
    //populate months for that year
    if (!this.data[year]) {
      this.data[year] = {};
      for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
        this.data[year][monthIndex] = {} as MonthData;
        this.data[year][monthIndex].monthName = Months[monthIndex];
        const firstDayOfMonth = new Date(year, monthIndex);
        const monthLastDay = lastDayOfMonth(firstDayOfMonth);
        this.data[year][monthIndex].monthStartDate = firstDayOfMonth;
        this.data[year][monthIndex].monthEndDate = monthLastDay;
      }
    }
    return this.data;
  }
}
