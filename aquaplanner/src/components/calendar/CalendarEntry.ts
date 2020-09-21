import { CalendarEntryCategory } from "./CalendarEntryCategory";
import { CalendarEntryType } from "./CalendarEntryType";

export class CalendarEntry {
  name!: string;
  calendarEntryType!: CalendarEntryType;
  calendarEntryCategory!: CalendarEntryCategory;

  dueDate: Date = new Date();

  public constructor(init?: Partial<CalendarEntry>) {
    Object.assign(this, init);
  }

  public isEventSeries(): boolean {
    return this.calendarEntryType === CalendarEntryType.EVENT_SERIES;
  }
}
