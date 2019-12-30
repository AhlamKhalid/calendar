<template>
  <div>
    <!-- v-if="!edit": view mode -->
    <div class="event-container" v-if="!edit">
      <!-- v-if="isUpdated": if event is updated, display updated one -->
      <p v-if="isUpdated" class="event-txt">{{ updatedEvent }}</p>
      <!-- v-else: if event is not updated -->
      <p v-else class="event-txt">{{ eventProp }}</p>
      <!-- icons -->
      <div class="event-icons text-right">
        <!-- pen icon -->
        <!-- @click: change to edit mode -->
        <font-awesome-icon
          class="fa-lg icon"
          :icon="['fas', 'pen']"
          @click="changeState"
        />
        <!-- trash icon -->
        <!-- @click: call deleteEvent function -->
        <font-awesome-icon
          class="fa-lg icon"
          :icon="['fas', 'trash-alt']"
          @click="deleteEvent"
        />
      </div>
    </div>
    <!-- v-else: edit mode -->
    <div class="event-container" v-else>
      <!-- input field -->
      <!-- :value="eventProp" : initialize field using eventProp -->
      <input
        id="updated-input"
        type="text"
        class="event-txt"
        :value="eventProp"
      />
      <div class="event-icons text-right">
        <!-- save button -->
        <!-- @click: call saveEvent function -->
        <b-button variant="success" @click="saveEvent">
          save
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // to toggle edit mode
      edit: false,
      // to know if event has been updated
      isUpdated: false,
      // updated event
      updatedEvent: ""
    };
  },
  props: ["eventProp"],
  methods: {
    // change to edit mode
    changeState() {
      this.edit = true;
    },
    // save an event after update
    saveEvent() {
      // get updated event
      const updatedEvent = document.getElementById("updated-input").value;
      // emit it to Events component
      this.$emit("save-event", updatedEvent);
      // back to view mode
      this.edit = false;
      // event is updated
      this.isUpdated = true;
      // save updated value
      this.updatedEvent = updatedEvent;
    },
    // delete event
    deleteEvent() {
      // get either eventProp or updatedEvent if the event is updated
      const eventToDelete = this.isUpdated ? this.updatedEvent : this.eventProp;
      // emit to Events component
      this.$emit("del-event", eventToDelete);
      // reset data
      this.isUpdated = false;
      this.updatedEvent = "";
    }
  }
};
</script>

<style>
.event-container {
  display: flex;
  margin: 10px 0;
}
.event-txt,
.event-icons {
  width: 50%;
}
.event-txt {
  padding: 5px;
}

.icon {
  margin: 0 10px;
}
.fa-pen {
  color: gray;
}
.fa-trash-alt {
  color: #dc3545;
}
.fa-trash-alt:hover,
.fa-pen:hover {
  cursor: pointer;
}
.fa-trash-alt:hover {
  color: #83343a;
}
.fa-pen:hover {
  color: rgb(99, 96, 96);
}
#updated-input {
  outline: none;
}
</style>
