<template>
  <div class="pets">
    <div v-for="pet in pets" v-bind:key="pet.id">
      <h1>Pet Info</h1>
      <p>Name: {{ pet.name }}</p>
      <p>Species: {{ pet.species }}</p>
      <p>Breed: {{ pet.breed }}</p>
      <p>Birthday: {{ pet.birthday }}</p>
      <p>Gender: {{ pet.gender }}</p>
      <p>Sterilized: {{ pet.sterilized }}</p>
      <router-link v-bind:to="`/pets/${pet.id}`">View Pet</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Pets",
      pets: [],
    };
  },
  created: function () {
    this.indexPets();
  },
  methods: {
    indexPets() {
      axios.get("/pets").then((response) => {
        console.log(response.data);
        this.pets = response.data;
      });
    },
  },
};
</script>
