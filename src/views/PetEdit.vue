<template>
  <div class="petsedit">
    <h1>Edit Pet</h1>
    <form v-on:submit.prevent="editPet()">
      <ul>
        <li v-for="error in errors" v-bind:key="error" style="color: red">
          {{ error }}
        </li>
      </ul>
      <p>
        Name:
        <input type="text" v-model="Pets.name" />
      </p>
      <p>
        <small v-if="Pets?.name?.length > 0 && Pets?.name?.length < 15">
          Remaining characters: {{ 15 - Pets?.name?.length }}
        </small>
        <small v-if="Pets?.name?.length > 15" class="text-danger">Pet's name can't be over 15 characters.</small>
      </p>
      <p>
        Species:
        <input type="text" v-model="Pets.species" />
      </p>
      <p>
        Breed:
        <input type="text" v-model="Pets.breed" />
      </p>
      <p>
        Birthday:
        <input type="date" v-model="Pets.birthday" />
      </p>
      <p>
        Customer ID:
        <input type="customer" v-model="Pets.customer_id" />
      </p>

      Gender:
      <br />
      <input type="radio" name="gender" value="Male" v-model="Pets.gender" />
      Male
      <br />
      <input type="radio" name="gender" value="Female" v-model="Pets.gender" />
      Female

      <br />

      <p>
        Sterilized:
        <br />
        <input type="radio" name="sterilized" value="true" v-model="Pets.sterilized" />
        Yes
        <br />
        <input type="radio" name="sterilized" value="false" v-model="Pets.sterilized" />
        No

        <br />
      </p>

      <p>
        Image Link:
        <input type="text" v-model="Pets.image" />
      </p>

      <input type="submit" value="EDIT" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      pet: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/pets/${this.$route.params.id}`).then((response) => {
      this.pet = response.data;
    });
  },
  methods: {
    editPet() {
      axios
        .patch(`/pets/${this.pet.id}`, this.pet)
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
