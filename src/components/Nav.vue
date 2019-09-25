<template>
    <div>
        <b-navbar class="navbar-inner" toggleable="lg" type="dark" variant="dark">
                <b-navbar-brand href="#">JSRAMVERK</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                  <b-navbar-nav>
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/report/week/1">Week 1</b-nav-item>
                  </b-navbar-nav>
                </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  props: { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar-collapse {
   padding-left:0;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #343A40;
}

li a {
    display: block;
    text-align: center;
    text-decoration: none;
}

a {
    text-decoration: none;
    color: white;
    font-size: 1.4em;
}

a:hover {
    color: grey;
}

/*@media (max-width: 990px) {
}*/
</style>
