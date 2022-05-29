<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>User Name:</label>
        <input type="text" v-model="newUserParams.user_name" required />
      </div>
      <div>
        <div>
          <label>First Name:</label>
          <input type="text" v-model="newUserParams.first_name" required />
          <p>
            <small v-if="newUserParams?.first_name?.length > 15" class="text-danger">
              Customer's first name can't be over 15 characters.
            </small>
            <small v-if="newUserParams?.first_name?.length > 0 && newUserParams?.first_name?.length < 15">
              Remaining characters: {{ 15 - newUserParams?.first_name?.length }}
            </small>
          </p>
        </div>
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" v-model="newUserParams.last_name" required />
        <p>
          <small v-if="newUserParams?.last_name?.length > 15" class="text-danger">
            Customer's last name can't be over 15 characters.
          </small>
          <small v-if="newUserParams?.last_name?.length > 0 && newUserParams?.last_name?.length < 15">
            Remaining characters: {{ 15 - newUserParams?.last_name?.length }}
          </small>
        </p>
      </div>
      <p>
        <label for="job">Job Title:</label>
        <select name="job" id="job" v-model="newUserParams.position" required>
          <option value="Vet Tech">Vet Tech</option>
          <option value="Vet">Vet</option>
          <option value="Receptionist">Receptionist</option>
          <option value="Lab Tech">Lab Tech</option>
          <option value="Vet Student">Vet Student</option>
          <option value="Janitor">Janitor</option>
        </select>
      </p>

      <div>
        <label>Password:</label>
        <input type="password" v-model="newUserParams.password" required />
      </div>
      <small v-if="newUserParams?.password?.length > 0 && newUserParams?.password?.length < 6" class="text-danger">
        Password must be longer than 6 characters.
      </small>
      <div>
        <label>Password confirmation:</label>
        <input type="password" v-model="newUserParams.password_confirmation" required />
      </div>
      <small v-if="newUserParams.password !== newUserParams.password_confirmation" class="text-danger">
        Password confirmation shoud match password.
      </small>
      <input type="submit" value="Submit" />
    </form>
  </div>
  <div>
    <router-link to="http://localhost:8080/">Back To Login Screen</router-link>
  </div>
</template>
