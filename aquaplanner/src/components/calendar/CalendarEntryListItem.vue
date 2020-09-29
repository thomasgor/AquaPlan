<template>
  <div
    id="calendarEntryListItem"
    v-bind:class="calendarEntry.calendarEntryCategory"
  >
    <b-row>
      <b-col cols="11">
        <span class="calendarEntryName">{{ calendarEntry.name }}</span>
        <span class="calendarEntryDueDate">
          {{ calendarEntry.dueDate | toUserDateFormat }}
        </span>
      </b-col>
      <b-col cols="1" class="calendarEntryListItemCheckbox v-100">
        <b-form-checkbox value="deleteCalendarEntryListItem"></b-form-checkbox>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import { CalendarEntry } from "./CalendarEntry";
  import moment from "moment";

  export default Vue.extend({
    name: "CalendarEntryListItem",

    props: {
      calendarEntry: {
        type: CalendarEntry,
        required: true,
      },
    },

    data: () => {
      return {};
    },

    filters: {
      toUserDateFormat: function(value: Date) {
        return moment(value).format("DD.MM.YYYY");
      },
    },
  });
</script>

<style scoped>
  * {
    --list-item-height: 60px;
    --list-item-padding: 5px;
    --list-item-border-radius: 5px;
  }
  #calendarEntryListItem {
    height: var(--list-item-height);
    border-left: 7px solid;
    border-radius: var(--list-item-border-radius);
    background-color: white;
    padding: var(--list-item-padding);

    min-width: 300px;
    flex-basis: 300px;
    flex: 1;

    box-shadow: 0 0 35px 0 rgba(154, 161, 171, 0.15);
  }

  #calendarEntryListItem.ADD_FEED {
    border-left-color: var(--red);
  }

  #calendarEntryListItem.FERTILIZIZE_PLANTS {
    border-left-color: var(--green);
  }

  #calendarEntryListItem.WATERCHANGE {
    border-left-color: var(--blue);
  }

  span.calendarEntryDueDate {
    font-size: 0.7rem;
    font-weight: 400;
    line-height: 1.5;
    display: block;
    text-align: left;
    color: #6c757d;
    position: relative;
  }

  .calendarEntryName {
    font-weight: bold;
    display: block;
    text-align: left;
    margin-bottom: 10px;
  }

  .calendarEntryListItemCheckbox {
    display: flex;
    align-items: center;
  }
</style>
