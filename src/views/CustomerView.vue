<template>
  <div class="customerview">
    <h1>Pet Info</h1>
    <p>Name: {{ pets.name }}</p>
    <p>Species: {{ pets.species }}</p>
    <p>Breed: {{ pets.breed }}</p>
    <p>Birthday: {{ pets.birthday }}</p>
    <p>Sex: {{ pets.sex }}</p>
    <p>Sterilized: {{ pets.sterilized }}</p>
    <router-link to="/pets">Back to all pets</router-link>
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
