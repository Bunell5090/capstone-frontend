<template>
  <div id="app">
    <CalendarView />
  </div>
</template>

<script>
import CalendarView from "CalendarView.vue";

export default {
  name: "App",
  components: {
    CalendarView,
  },
  mounted: function () {
    localStorage.apT = this.$route.query.apT;
    localStorage.apk = this.$route.query.apk;
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  /* margin-top: 60px; */
}
</style>
