<template>
  <div>
    <div class="form-container">
      <!-- input field -->
      <!-- v-model="newEvent": two way binding -->
      <input
        id="newEvent"
        type="text"
        class="event-txt"
        placeholder="Type event .."
        v-model="newEvent"
      />
      <!-- Add button -->
      <!-- disabled if input field is empty
      or no day is selected-->
      <!-- @click: call addEvent function -->
      <div class="add-icon text-right">
        <b-button
          variant="danger"
          :disabled="isDisabled()"
          @click="addEvent"
        >
          <font-awesome-icon :icon="['fas', 'plus']" />
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // bind with input field
      newEvent: ""
    };
  },
  // to know if there is a selected day
  props: ["isSelectedProp"],
  methods: {
    // add event
    addEvent() {
      // emit to App component
      this.$emit("add-event", this.newEvent);
      // clear input field
      this.newEvent = "";
    },
    // to enable add button, input field should not be empty
    // & a day is selected
    isDisabled() {
      return this.newEvent.length === 0 || !this.isSelectedProp;
    }
  }
};
</script>

<style scoped>
.form-container {
  display: flex;
  margin: 10px 0;
}
.event-txt,
.add-icon {
  width: 50%;
}
.event-txt {
  padding: 5px;
  border: none;
  border-bottom: 1px solid #dc3545;
  outline: none;
}
</style>
