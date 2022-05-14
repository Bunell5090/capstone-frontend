<template>
  <div class="petnew">
    <h1>New Pet</h1>
    <form v-on:submit.prevent="createPet()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <p>
        Name:
        <input type="text" v-model="newPet.name" />
      </p>
      <p>
        <small v-if="newPet?.name?.length > 0 && newPet?.name?.length < 15">
          Remaining characters: {{ 15 - newPet?.name?.length }}
        </small>
        <small v-if="newPet?.name?.length > 15" class="text-danger">Pet's name can't be over 15 characters.</small>
      </p>
      <p>
        Species:
        <input type="text" v-model="newPet.species" />
      </p>
      <p>
        Breed:
        <input type="text" v-model="newPet.breed" />
      </p>
      <p>
        Birthday:
        <input type="date" v-model="newPet.birthday" />
      </p>
      <p>
        Gender:
        <input type="text" v-model="newPet.Gender" />
      </p>
      <p>
        Sterilized:
        <input type="radio" v-model="newPet.Gender" />
        <br />
        <label for="true">Yes</label>
        <br />
        <label for="false">No</label>
        <br />
      </p>

      <p>
        Image Link:
        <input type="text" v-model="newPet.image" />
      </p>

      <input type="submit" value="Create Pet" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newPet: {},
      errors: [],
    };
  },
  methods: {
    createPet() {
      axios
        .post("/pets", this.newPet)
        .then((response) => {
          console.log(response);
          this.$router.push("/pets");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },
  },
};
</script>
