<template>
<main>
    <Nav />
    <h1>Me</h1>
    <p>{{ text }}</p>
    <p>{{ desc }}</p>
</main>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Me',
  props: { },
  components: {
      Nav,
  },
  data() {
    return {
        text: "",
        desc: ""
    }
  },
  mounted() {
    this.getMe();
  },
  methods: {
    getMe() {
      let that = this;
      that.text = "Hej och välkommen till början av min Me-sida i kursen JSramverk!";
      that.desc = "Jag heter Jonathan Lindh och siktar just nu på att lära mig skriva akademiskt och knåpa ihop en grundläggande app i Javascriptramverket Vue.";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
