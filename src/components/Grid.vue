<template>
    <div>
        <!-- for an explanation of index key see: https://vuejs.org/v2/guide/list.html#key -->
        <app-quote v-for="(quote, index) in quotes" :key="index" @click.native="deleteQuote(index)"> {{ quote }}</app-quote>
    </div>
</template>

<script>
import Quote from './Quote'
export default {
  data() {
    return {
      quotes: ['default quote'],
    }
  },
  methods: {
      deleteQuote(index) {
        console.log("deleting quote on index:", index);
        this.quotes.splice(index, 1);
      }
  },
  components: {
      appQuote: Quote
  }
}
</script>

<style scoped>

</style>

