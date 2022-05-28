<template>
  <div class="customersview">
    <h1>Customer Info</h1>
    <p>First Name: {{ customers.first_name }}</p>
    <p>Last Name: {{ customers.last_name }}</p>
    <p>Address: {{ customers.address }}</p>
    <p>City: {{ customers.city }}</p>
    <p>State: {{ customers.state }}</p>
    <p>Zipcode: {{ customers.zipcode }}</p>
    <router-link v-bind:to="`/customers/${customers.id}/edit`" style="margin-right: 10px">Edit Customer</router-link>
    <button v-on:click="destroyCustomer()" style="margin-right: 10px">Delete</button>
    <router-link to="/customers">Back to list of all customers</router-link>
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
  methods: {
    destroyCustomer() {
      axios.delete(`/customers/${this.customers.id}`).then((response) => {
        console.log(response);
        this.$router.push("/customers");
      });
    },
  },
};
</script>
