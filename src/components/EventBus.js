import Vue from "vue";

export const EventBus = new Vue({
  methods: {
    emitQuoteAdded(data) {
      this.$emit("quoteAdded", data);
    },
    emitQuoteLength(data) {
      this.$emit("changedQuoteQuantity", data);
    },
    registerQuoteAdded(callback) {
      this.$on("quoteAdded", callback);
    },
    registerQuoteLengthChanged(callback) {
      this.$on("changedQuoteQuantity", callback);
    }
  }
});
