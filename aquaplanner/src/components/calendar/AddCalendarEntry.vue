<template>
  <div id="calendar">
    <b-form-group
      label-cols-sm="4"
      label-align-sm="left"
      label-cols-lg="3"
      label="Name:"
      label-for="nameInput"
    >
      <b-input-group>
        <b-form-input id="nameInput" type="text" v-model="calendarEntry.name" />
      </b-input-group>
    </b-form-group>

    <b-form-group
      label-cols-sm="4"
      label-align-sm="left"
      label-cols-lg="3"
      label-align-lg="left"
      label="Kategorie:"
      label-for="categoryIntput"
    >
      <b-input-group>
        <b-form-select
          id="categoryIntput"
          v-model="calendarEntry.caledarEntryCategory"
          :options="calendarEntryCategoryOptions"
        ></b-form-select>
      </b-input-group>
    </b-form-group>

    <b-form-group
      label-cols-sm="4"
      label-align-sm="left"
      label-cols-lg="3"
      label-align-lg="left"
      label="Fällig am:"
      label-for="dateInput"
    >
      <b-input-group>
        <b-form-datepicker
          id="dateInput"
          v-model="calendarEntry.dueDate"
          locale="de-DE"
        />
      </b-input-group>
    </b-form-group>

    <b-form-group
      label-cols-sm="4"
      label-cols-lg="3"
      label="Typ:"
      label-align-sm="left"
      label-align-lg="left"
    >
      <b-form-radio-group
        name="calendarEntryTypeRadio"
        v-model="calendarEntry.calendarEntryType"
        :options="calendarEntryTypeOptions"
        stacked
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group
      label-cols-sm="4"
      label-align-sm="left"
      label-cols-lg="3"
      label-align-lg="left"
      label="Ende:"
      label-for="dateInput"
      v-show="isEventSeries"
    >
      <b-input-group>
        <b-form-datepicker
          id="dateInput"
          v-model="calendarEntry.endDate"
          locale="de-DE"
        />
      </b-input-group>
    </b-form-group>

    <b-button class="float-left">Zurücksetzen</b-button>
    <b-button class="float-right" variant="primary">Eintrag anlegen</b-button>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import { CalendarEntryCategory } from "./CalendarEntryCategory";
  import { CalendarEntry } from "./CalendarEntry";
  import { CalendarEntryType } from "./CalendarEntryType";

  export default Vue.extend({
    name: "AddCalendarEntry" as string,
    data: () => {
      return {
        calendarEntry: new CalendarEntry({
          calendarEntryType: CalendarEntryType.EVENT_SERIES,
        }),

        calendarEntryTypeOptions: Object.keys(CalendarEntryType).map((x) => {
          return {
            text: CalendarEntryType[x as keyof typeof CalendarEntryType],
            value: x,
          };
        }),

        calendarEntryCategoryOptions: Object.keys(CalendarEntryCategory).map(
          (x) => {
            return {
              text:
                CalendarEntryCategory[x as keyof typeof CalendarEntryCategory],
              value: x,
            };
          }
        ),
      };
    },

    computed: {
      isEventSeries: function(): boolean {
        return this.calendarEntry.isEventSeries();
      },
    },
  });
</script>

<style></style>
