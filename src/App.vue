<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Me</router-link> |
      <router-link to="/report/week/1">Week 1</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://rsms.me/inter/inter-ui.css');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 100%;
    font-family: 'Inter UI', sans-serif;
}

.app {
    width: 62em;
    margin: 0 auto;
    padding: 2em 6em 8em;
    background-color: #0074d9;
    border-top: 4px solid #0be6d7;
    color: white;
}

h1 {
    font-size: 8em;
    font-weight: 100;
}

h2 {
    font-size: 6em;
    font-weight: 100;
}

p {
    font-size: 2em;
    font-weight: normal;
}
</style>
