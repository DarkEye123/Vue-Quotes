<template>
    <div class="row mt-5">
        <!-- for an explanation of index key see: https://vuejs.org/v2/guide/list.html#key -->
        <app-quote v-for="(quote, index) in quotes" :key="index" @click.native="deleteQuote(index)"> {{ quote }}</app-quote>
    </div>
</template>

<script>
import Quote from "./Quote";
import { EventBus } from "./EventBus";
export default {
  props: ["maximumCapacity"],
  data() {
    return {
      quotes: ["default quote"]
    };
  },
  methods: {
    deleteQuote(index) {
      console.log("deleting quote on index:", index);
      this.quotes.splice(index, 1);
      console.log(`quotes left: ${this.quotes.length}/${this.maximumCapacity}`);
      EventBus.emitQuoteLength(this.quotes.length);
    },
    addNewQuote(content) {
      if (this.quotes.length >= this.maximumCapacity) {
        alert(
          "Can't add additional quote to the board. Please delete some of already created first."
        );
        return;
      }
      this.quotes.push(content);
      EventBus.emitQuoteLength(this.quotes.length);
    }
  },
  components: {
    appQuote: Quote
  },
  created() {
    EventBus.emitQuoteLength(this.quotes.length);
    EventBus.registerQuoteAdded(data => this.addNewQuote(data));
  }
};
</script>

<style scoped>
</style>

