<template>
  <div class="customerview">
    <h1>Customer Info</h1>
    <p>First Name: {{ customers.first_name }}</p>
    <p>Last Name: {{ customers.last_name }}</p>
    <p>Address: {{ customers.address }}</p>
    <p>City, State: {{ customers.city_state }}</p>
    <p>Zipcode: {{ customers.zipcode }}</p>
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
