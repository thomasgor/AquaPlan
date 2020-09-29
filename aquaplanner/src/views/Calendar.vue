<template>
  <div id="calendar">
    <b-row>
      <b-col class=".d-lg-none">
        <AddCalendarEntry></AddCalendarEntry>
      </b-col>
      <b-col>
        <CalendarEntryList
          v-bind:calendarEntries="calendarEntries"
        ></CalendarEntryList>
      </b-col>
      <!-- <b-col cols="2">
        <CalendarOverview></CalendarOverview>
      </b-col> -->
    </b-row>
  </div>
</template>

<script lang="ts">
  import AddCalendarEntry from "../components/calendar/AddCalendarEntry.vue";
  import CalendarOverview from "../components/calendar/CalendarOverview.vue";
  import CalendarEntryList from "../components/calendar/CalendarEntryList.vue";
  import { CalendarEntry } from "@/components/calendar/CalendarEntry";
  import { CalendarEntryCategory } from "@/components/calendar/CalendarEntryCategory";
  import { CalendarEntryType } from "@/components/calendar/CalendarEntryType";
  export default {
    name: "Calendar",
    components: {
      AddCalendarEntry,
      CalendarOverview,
      CalendarEntryList,
    },

    data: () => {
      const calendarEntries: Array<CalendarEntry> = [];

      calendarEntries.push(
        new CalendarEntry({
          name: "Fische füttern",
          calendarEntryCategory: CalendarEntryCategory.ADD_FEED,
          calendarEntryType: CalendarEntryType.SINGLE_EVENT,
          dueDate: new Date(),
        })
      );

      calendarEntries.push(
        new CalendarEntry({
          name: "Profito 10ml",
          calendarEntryCategory: CalendarEntryCategory.FERTILIZIZE_PLANTS,
          calendarEntryType: CalendarEntryType.SINGLE_EVENT,
          dueDate: new Date(),
        })
      );

      calendarEntries.push(
        new CalendarEntry({
          name: "30% Wasserwechsel",
          calendarEntryCategory: CalendarEntryCategory.WATER_CHANGE,
          calendarEntryType: CalendarEntryType.SINGLE_EVENT,
          dueDate: new Date(),
        })
      );

      return {
        calendarEntries: calendarEntries,
      };
    },
  };
</script>

<style scoped></style>
