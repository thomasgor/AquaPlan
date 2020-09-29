<template>
  <div id="calendarEntryList">
    <h3>Anstehende Aufgaben</h3>
    <div class="calendarEntryListItemContainer">
      <CalendarEntryListItem
        class="calendarEntryListItem"
        v-for="calendarEntry in calendarEntries"
        :calendarEntry="calendarEntry"
        v-bind:key="calendarEntry.name"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CalendarEntryListItem from "./CalendarEntryListItem.vue";

export default Vue.extend({
  name: "CalendarEntryList",
  components: { CalendarEntryListItem },

  props: {
    calendarEntries: {
      type: Array,
      required: true,
    },
  },

  data: () => {
    return {};
  },
});
</script>

<style scoped>
#calendarEntryListItemContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.calendarEntryListItem:not(:last-child) {
  margin-bottom: 10px;
}
</style>
