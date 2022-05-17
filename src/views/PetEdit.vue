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
        Customer ID:
        <input type="customer" v-model="newPet.customer_id" />
      </p>

      Gender:
      <br />
      <input type="radio" name="gender" value="Male" v-model="newPet.gender" />
      Male
      <br />
      <input type="radio" name="gender" value="Female" v-model="newPet.gender" />
      Female

      <br />

      <p>
        Sterilized:
        <br />
        <input type="radio" name="sterilized" value="true" v-model="newPet.sterilized" />
        Yes
        <br />
        <input type="radio" name="sterilized" value="false" v-model="newPet.sterilized" />
        No

        <br />
      </p>

      <p>
        Image Link:
        <input type="text" v-model="newPet.image" />
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
