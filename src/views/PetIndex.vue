<template>
  <div class="pets">
    <div v-for="pet in pets" v-bind:key="pet.id">
      <h1>Pet Info</h1>
      <p>Name: {{ pets.name }}</p>
      <p>Species: {{ pets.species }}</p>
      <p>Breed: {{ pets.breed }}</p>
      <p>Birthday: {{ pets.birthday }}</p>
      <p>Sex: {{ pets.sex }}</p>
      <p>Sterilized: {{ pets.sterilized }}</p>
      <router-link v-bind:to="`/pets/${pets.id}`">
        <img v-bind:src="pets.image" v-bind:alt="pets.name" style="max-width: 250px" />
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Pets",
      posts: [],
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
