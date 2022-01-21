export interface CalendarDays {
  previousMonthDays: Date[];
  currentMonthDays: Date[];
  nextMonthDays: Date[];
  allDays: Date[];
}
export interface MonthData {
  monthName: string;
  monthStartDate: Date;
  monthEndDate: Date;
  calendarDays?: CalendarDays;
}

export interface YearData {
  [month: number]: MonthData;
}
export interface Calendar {
  [year: number]: YearData;
}
