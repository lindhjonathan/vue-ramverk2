<template>
<main>
    <Nav />
    <h2>README</h2>
    <VueShowdown :markdown="fileContent"></VueShowdown>
    <p class="question">{{ github }}</p>
</main>

</template>

<script>
import Nav from './Nav.vue'
import VueShowdown from "vue-showdown"

export default {
  name: 'Report',
  components: {
    Nav,
    VueShowdown,
  },
  data() {
    return {
      fileContent: null,
      rawContent: null,
      github: ""
    }
  },
  mounted() {
    this.getGithub();
  },
  methods: {
    getReadme() {
        this.readme = "Hello readme";
  },
    getGithub() {
        this.github = "git link";
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-transform: uppercase;
}

.question {
  margin-bottom: 2em;
}
</style>
