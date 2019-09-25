<template lang="html">
  <div id="app">
    <Header />
    <Home />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import "./scss/main.scss";
import './scss/grid.scss';

export default {
  name: "app",
  components: {
    Header,
    Home
  }
};
</script>
