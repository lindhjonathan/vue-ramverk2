<template>
  <div id="app">
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
    overflow-y: scroll;
}

main {
    width: 64rem;
    margin: 0 auto;
    padding-bottom: 6rem;
    padding-top: 1rem;
}
/*.app {
    width: 62em;
    margin: 0 auto;
    padding: 2em 6em 8em;
    background-color: #0074d9;
    color: white;
}*/

h1 {
    font-size: 6em;
    font-weight: 100;
}

h2 {
    font-size: 4em;
    font-weight: 100;
}

p {
    font-size: 2em;
    font-weight: normal;
}

@media (max-width: 990px) {
    main {
        width: 100%;
    }
}
</style>
