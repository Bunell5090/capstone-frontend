<template>
  <div class="customers">
    <div v-for="customer in customers" v-bind:key="customer.id">
      <h1>Customer Info</h1>
      <p>First Name: {{ customer.first_name }}</p>
      <p>Last Name: {{ customer.last_name }}</p>
      <p>Address: {{ customer.address }}</p>
      <p>City: {{ customer.city }}</p>
      <p>State: {{ customer.state }}</p>
      <p>Zipcode: {{ customer.zipcode }}</p>
      <router-link v-bind:to="`/customers/${customer.id}`">View Customer</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Customers",
      customers: [],
    };
  },
  created: function () {
    this.indexCustomers();
  },
  methods: {
    indexCustomers() {
      axios.get("/customers").then((response) => {
        console.log(response.data);
        this.customers = response.data;
      });
    },
  },
};
</script>
