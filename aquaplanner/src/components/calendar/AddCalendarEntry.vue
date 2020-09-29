<template>
  <div>
    <h3>Neue Aufgabe</h3>
    <div id="calendarEntryInputForm">
      <b-form-group
        label-cols-sm="4"
        label-align-sm="left"
        label-align-lg="left"
        label-cols-lg="3"
        label="Name:"
        label-for="nameInput"
      >
        <b-input-group>
          <b-form-input
            id="nameInput"
            type="text"
            v-model="calendarEntry.name"
            required
          />
        </b-input-group>
      </b-form-group>

      <b-form-group
        label-cols-sm="4"
        label-cols-lg="3"
        label-align-sm="left"
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
            required
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
        ></b-form-radio-group>
      </b-form-group>

      <b-form-group
        label-cols-sm="4"
        label-align-sm="left"
        label-cols-lg="3"
        label="Wiederholung:"
        label-for="eventReptitionInDays"
      >
        <b-input-group append="Tage">
          <b-form-input
            id="eventReptitionInDays"
            type="number"
            v-model="calendarEntry.repitionInDays"
            required
          />
        </b-input-group>
      </b-form-group>

      <b-form-group
        label-cols-sm="4"
        label-align-sm="left"
        label-cols-lg="3"
        label-align-lg="left"
        label="Ende:"
        label-for="endDateInput"
        v-show="isEventSeries"
      >
        <b-input-group>
          <b-form-datepicker
            id="endDateInput"
            v-model="calendarEntry.endDate"
            locale="de-DE"
          />
        </b-input-group>
      </b-form-group>

      <b-row>
        <b-col class="resetButtonContainer">
          <b-button>Zurücksetzen</b-button>
        </b-col>
        <b-col></b-col>
        <b-col class="submitButtonContainer">
          <b-button variant="primary">Eintrag anlegen</b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {
    CalendarEntryCategory,
    CalendarEntryCategoryTranslation,
  } from "./CalendarEntryCategory";
  import { CalendarEntry } from "./CalendarEntry";
  import {
    CalendarEntryType,
    CalendarEntryTypeTranslation,
  } from "./CalendarEntryType";

  export default Vue.extend({
    name: "AddCalendarEntry" as string,
    data: () => {
      return {
        calendarEntry: new CalendarEntry({
          calendarEntryType: CalendarEntryType.EVENT_SERIES,
        }),

        calendarEntryTypeOptions: Object.keys(CalendarEntryType).map((x) => {
          return {
            text:
              CalendarEntryTypeTranslation[
                x as keyof typeof CalendarEntryTypeTranslation
              ],
            value: x,
          };
        }),

        calendarEntryCategoryOptions: Object.keys(CalendarEntryCategory).map(
          (x) => {
            return {
              text:
                CalendarEntryCategoryTranslation[
                  x as keyof typeof CalendarEntryCategoryTranslation
                ],
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

//TODO refactor this to bootstrap theme
<style scoped>
  #calendarEntryInputForm {
    box-shadow: 0 0 35px 0 rgba(154, 161, 171, 0.15);
    background-color: white;
    padding: 10px;
  }

  #calendarEntryInputForm label,
  #calendarEntryInputForm legend {
    text-align: left;

    font-size: 0.7rem;
    font-weight: 400;
    line-height: 1.5;
    color: #6c757d;
    text-align: left;
  }

  .resetButtonContainer {
    text-align: left;
  }

  .submitButtonContainer {
    text-align: right;
  }
</style>
