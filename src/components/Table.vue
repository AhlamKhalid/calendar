<template>
  <div>
    <!-- first row: days -->
    <b-row>
      <!-- loop through days array -->
      <b-col class="text-center bold" v-for="day in days" :key="day">{{
        day
      }}</b-col>
    </b-row>
    <!-- fill calendar -->
    <b-row>
      <b-col>
        <!-- each week -->
        <div class="week-container" v-for="(week, index) in dates" :key="index">
          <!-- each day in this week -->
          <!-- @click: call clickDay function & send current day -->
          <!-- :class="dayClass(day.id) : dynamically bind class -->
          <div
            class="text-center cell"
            v-for="(day, index) in week.days"
            :key="index"
            @click="clickDay(day)"
            :class="dayClass(day.id)"
          >
            {{ day.id }}
            <!-- how many events in a day -->
            <!-- v-if="day.events.length" : if there are events in a day -->
            <div v-if="day.events.length" class="text-right">
              <!-- pill shape -->
              <b-badge pill variant="danger">{{ day.events.length }}</b-badge>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import calendar data
import data from "../assets/data.json";
export default {
  data() {
    return {
      // days
      days: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      // calendar data
      dates: data,
      // determine selected day
      selectedDay: null
    };
  },
  methods: {
    // select this day "focus"
    selectDay(id) {
      this.selectedDay = id;
    },
    // clicking on a day
    clickDay(day) {
      // emit "click-day" event to App component
      this.$emit("click-day", day);
      // call selectDay function & send day id
      this.selectDay(day.id);
    },
    // if day is selected, give it focus using "selected-day" class
    dayClass(id) {
      return this.selectedDay === id ? "selected-day" : "";
    }
  }
};
</script>

<style scoped>
.bold {
  font-weight: bold;
}
/* grid system with seven columns "equally distributed" */
.week-container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
/* each cell in calendar */
.cell {
  padding: 30px;
  height: 100px;
}
.cell:hover,
.selected-day {
  background-color: lightgray;
  cursor: pointer;
}
</style>
