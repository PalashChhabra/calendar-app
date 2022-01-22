export interface CalendarDays {
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
