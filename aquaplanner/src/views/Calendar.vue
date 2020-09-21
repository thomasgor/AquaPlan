<template>
  <div id="calendar">
    <b-row>
      <b-col cols="3">
        <AddCalendarEntry></AddCalendarEntry>
      </b-col>
      <b-col>
        <CalendarOverview></CalendarOverview>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import AddCalendarEntry from "../components/calendar/AddCalendarEntry";
  import CalendarOverview from "../components/calendar/CalendarOverview";
  export default {
    name: "Calendar",
    components: {
      AddCalendarEntry,
      CalendarOverview,
    },
  };
</script>

<style></style>
