<template>
  <div class="customerview">
    <h1>Customer Info</h1>
    <p>Name: {{ customers.name }}</p>
    <p>Species: {{ customers.species }}</p>
    <p>Breed: {{ customers.breed }}</p>
    <p>Birthday: {{ customers.birthday }}</p>
    <p>Sex: {{ customers.sex }}</p>
    <p>Sterilized: {{ customers.sterilized }}</p>
    <router-link to="/customers">Back to all pets</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      customers: {},
    };
  },
  created: function () {
    axios.get(`/customers/${this.$route.params.id}`).then((response) => {
      this.customers = response.data;
    });
  },
  methods: {},
};
</script>
