<template>
  <div id="app">
    <b-container>
      <!-- header -->
      <b-row>
        <b-col>
          <Header />
        </b-col>
      </b-row>
      <!-- Add event form -->
      <b-row>
        <b-col>
          <!-- send "isSelected" as prop to enable add button -->
          <!-- handle emitted event from EventForm component -->
          <EventForm :isSelectedProp="isSelected" @add-event="addEvent" />
        </b-col>
      </b-row>
      <!-- calendar -->
      <!-- click-day: custom event emitted from Table component -->
      <Table @click-day="fillDay" />
      <!-- Events -->
      <!-- send "day" as prop to Events component-->
      <Events :dayProp="day" />
    </b-container>
  </div>
</template>

<script>
// import components
import Header from "./components/Header";
import Table from "./components/Table";
import Events from "./components/Events";
import EventForm from "./components/EventForm";

export default {
  name: "app",
  data() {
    return {
      // clicked day
      day: null,
      // flag to know if a day has been selected
      isSelected: false
    };
  },
  components: {
    Header,
    Table,
    Events,
    EventForm
  },
  methods: {
    // assign "day" emitted from Table component
    // to "day" in data
    fillDay(day) {
      this.day = day;
      this.selectDay();
    },
    // change "isSelected" flag to true
    selectDay() {
      this.isSelected = true;
    },
    // add new event
    addEvent(newEvent) {
      this.day.events.push(newEvent);
    }
  }
};
</script>

<style>
#app {
  font-size: 20px;
}
/* each row: <b-row> */
.row {
  margin: 20px 0;
}
</style>
