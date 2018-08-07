<template>
      <div class="row justify-content-center mt-5">
        <form class="col-8">
            <div class="text-center form-group">
                <label>Quote</label>
                <!-- <textarea class="for</div>m-control form-control-lg" rows="3" v-model="quote"></textarea> -->
                <input class="form-control form-control-lg" type="text" v-model="quote">
            </div>
            <div class="form-group">
                <button class="btn btn-primary" @click.prevent="addNewQuote">add quote</button>
            </div>
        </form></div>
</template>

<script>
import { EventBus } from "./EventBus";
export default {
  data() {
    return {
      quote: ""
    };
  },
  methods: {
    addNewQuote() {
      EventBus.emitQuoteAdded(this.quote);
      this.quote = "";
    }
  }
};
</script>

<style scoped>
</style>