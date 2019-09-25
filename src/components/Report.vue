<template>
<div>
    <Nav />
    <main>
        <h2>README</h2>
        <markdown-it-vue class="md-body" :content="content"/>
        <hr>
        <a href="https://github.com/lindhjonathan/vue-ramverk2">Find me on Github!</a>
    </main>
</div>
</template>

<script>
import Nav from './Nav.vue'
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  name: 'Report',
  components: {
    Nav,
    MarkdownItVue
  },
  data() {
    return {
      content: null
    }
  },
  mounted() {
    this.getReadme();
  },
  methods: {
    getReadme() {
        this.content = `# me

## Project setup

npm install

### Compiles and hot-reloads for development
npm run serve

### Compiles and minifies for production
npm run build

### Run your tests
npm run test

### Lints and fixes files
npm run lint

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
        `;
  },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-transform: uppercase;
}
</style>
