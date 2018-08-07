<template>
  <div class="container">
    <app-progress-bar :current=quotesCount :max=gridCapacity></app-progress-bar>
    <app-new-quote></app-new-quote>
    <app-grid :maximumCapacity=gridCapacity></app-grid>
    <footer class="row">
        <div class="col-sm-12 text-center footer">
            <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
        </div>
    </footer>
  </div>
</template>

<script>
import Grid from "./components/Grid";
import ProgressBar from "./components/ProgressBar";
import NewQuote from "./components/NewQuote";
import { EventBus } from "./components/EventBus";
export default {
  data() {
    return {
      quotesCount: 0,
      gridCapacity: 10
    };
  },
  components: {
    appGrid: Grid,
    appProgressBar: ProgressBar,
    appNewQuote: NewQuote
  },
  created() {
    console.log(Grid);
    EventBus.registerQuoteLengthChanged(data => {
      this.quotesCount = data;
    });
  }
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 60px; /* Set the fixed height of the footer here */
}
</style>
