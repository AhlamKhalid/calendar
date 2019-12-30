<template>
  <div>
    <b-row>
      <b-col>
        <!-- header of Events section -->
        <h2 class="events-header">Events</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <!-- v-if="dayProp": if dayProp is defined -->
        <div v-if="dayProp">
          <div :key="index" v-for="(event, index) in dayProp.events">
            <!-- each event -->
            <!-- send "event" as prop to Event component -->
            <!-- del-event: event emitted by Event component -->
            <!-- save-event: event emitted by Event component
            $event argument: value received from Event component-->
            <Event
              :eventProp="event"
              @del-event="deleteEvent"
              @save-event="saveEvent($event, index)"
            />
          </div>
        </div>
        <!-- v-if: call checkEvents function -->
        <p class="no-events" v-if="checkEvents()">No events</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import component
import Event from "./Event";
export default {
  // day
  props: ["dayProp"],
  components: {
    Event
  },
  methods: {
    // delete event
    deleteEvent(eventToDelete) {
      this.dayProp.events = this.dayProp.events.filter(
        event => event !== eventToDelete
      );
    },
    // update event
    saveEvent(updatedEvent, index) {
      this.dayProp.events[index] = updatedEvent;
    },
    // if dayProp is not defined or no events in a day
    checkEvents() {
      return !this.dayProp || !this.dayProp.events.length;
    }
  }
};
</script>

<style scoped>
.events-header {
  border-bottom: 1px solid rgb(179, 177, 177);
}
.no-events {
  font-style: italic;
}
</style>
