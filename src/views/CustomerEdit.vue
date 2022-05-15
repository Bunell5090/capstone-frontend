<template>
  <div class="customersedit">
    <h1>Edit Customer</h1>
    <form v-on:submit.prevent="editCustomer()">
      <ul>
        <li v-for="error in errors" v-bind:key="error" style="color: red">
          {{ error }}
        </li>
      </ul>
      <p>
        First Name:
        <input type="text" v-model="Customer.first_name" />
      </p>
      <p>
        <small v-if="Customer?.first_name?.length > 0 && Customer?.first_name?.length < 15">
          Remaining characters: {{ 15 - Customer?.first_name?.length }}
        </small>
        <small v-if="Customer?.first_name?.length > 15" class="text-danger">
          Customer's first name can't be over 15 characters.
        </small>
      </p>
      <p>
        Last Name:
        <input type="text" v-model="Customer.last_name" />
      </p>
      <p>
        <small v-if="Customer?.last_name?.length > 0 && Customer?.last_name?.length < 15">
          Remaining characters: {{ 15 - Customer?.last_name?.length }}
        </small>
        <small v-if="Customer?.last_name?.length > 15" class="text-danger">
          Customer's last name can't be over 15 characters.
        </small>
      </p>

      <p>
        Address:
        <input type="text" v-model="Customer.address" />
      </p>
      <p>
        City:
        <input type="text" v-model="Customer.city" />
      </p>
      <p>
        <label for="state">State:</label>
        <select name="state" id="state" v-model="Customer.state">
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </p>

      <p>
        Zipcode:
        <input type="customer" maxlength="5" v-model="Customer.zipcode" />
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
      customer: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/customers/${this.$route.params.id}`).then((response) => {
      this.customer = response.data;
    });
  },
  methods: {
    editCustomer() {
      axios
        .patch(`/customers/${this.customer.id}`, this.customer)
        .then((response) => {
          console.log(response);
          this.$router.push("/customers");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },
  },
};
</script>
