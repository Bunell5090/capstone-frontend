<template>
  <div class="petview">
    <h1>Pet Info</h1>
    <p>Name: {{ pets.name }}</p>
    <p>Species: {{ pets.species }}</p>
    <p>Breed: {{ pets.breed }}</p>
    <p>Birthday: {{ pets.birthday }}</p>
    <p>Gender: {{ pets.gender }}</p>
    <p>Sterilized: {{ pets.sterilized }}</p>
    <router-link to="/pets">Back to all pets</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      pets: {},
    };
  },
  created: function () {
    axios.get(`/pets/${this.$route.params.id}`).then((response) => {
      this.pets = response.data;
    });
  },
  methods: {},
};
</script>
