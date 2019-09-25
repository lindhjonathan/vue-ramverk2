<template>
<div>
    <Nav />
    <main>
        <h1>Me</h1>
        <p>{{ text }}</p>
        <p>{{ desc }}</p>
    </main>
</div>
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
      that.desc = "Jag heter Jonathan och siktar just nu på att lära mig skriva akademiskt och knåpa ihop en enkel app i Javascriptramverket Vue som förhoppningsvis kommer växa lite med tiden.";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
