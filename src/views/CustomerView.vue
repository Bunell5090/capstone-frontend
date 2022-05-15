<template>
  <div class="customersview">
    <h1>Customer Info</h1>
    <p>First Name: {{ customers.first_name }}</p>
    <p>Last Name: {{ customers.last_name }}</p>
    <p>Address: {{ customers.address }}</p>
    <p>City: {{ customer.city }}</p>
    <p>State: {{ customer.state }}</p>
    <p>Zipcode: {{ customers.zipcode }}</p>
    <router-link v-bind:to="`/customers/${posts.id}/edit`" style="margin-right: 10px">Edit Customer</router-link>
    <button v-on:click="destroyCustomer()" style="margin-right: 10px">Delete</button>
    <router-link to="/customers">Back to all customers</router-link>
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
