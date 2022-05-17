<template>
  <div class="petsview">
    <h1>Pet Info</h1>
    <p>Name: {{ pets.name }}</p>
    <p>Species: {{ pets.species }}</p>
    <p>Breed: {{ pets.breed }}</p>
    <p>Birthday: {{ pets.birthday }}</p>
    <p>Gender: {{ pets.gender }}</p>
    <p>Sterilized: {{ pets.sterilized }}</p>
    <router-link v-bind:to="`/pets/${pets.id}/edit`" style="margin-right: 10px">Edit Pet</router-link>
    <button v-on:click="destroyPet()" style="margin-right: 10px">Delete</button>
    <router-link to="http://localhost:8080/pets">Back to all pets</router-link>
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
  methods: {
    destroyPet() {
      axios.delete(`/pets/${this.pets.id}`).then((response) => {
        console.log(response);
        this.$router.push("/pets");
      });
    },
  },
};
</script>
