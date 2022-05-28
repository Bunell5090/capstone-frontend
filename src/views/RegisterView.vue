
<template>
  <div class="register"></div>
  <body>
    <main>
      <div class="container">
        <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div class="d-flex justify-content-center py-4">
                  <a href="index.html" class="logo d-flex align-items-center w-auto">
                    <img src="/assets/img/logo.png" alt="" />
                    <span class="d-none d-lg-block"></span>
                  </a>
                </div>
                <!-- End Logo -->

                <div class="card mb-3">
                  <div class="card-body">
                    <div class="pt-4 pb-2">
                      <h5 class="card-title text-center pb-0 fs-4">Create an Account</h5>
                      <p class="text-center small">Enter your personal details to create account</p>
                    </div>

                    <form class="row g-3 needs-validation" novalidate>
                      <div class="col-12">
                        <label for="yourName" class="form-label">First Name</label>
                        <input type="text" name="first_name" class="form-control" id="first_Name" required />
                        <div class="invalid-feedback">Please, enter your first name!</div>
                      </div>

                      <div class="col-12">
                        <label for="yourName" class="form-label">Last Name</label>
                        <input type="text" name="last_name" class="form-control" id="last_Name" required />
                        <div class="invalid-feedback">Please, enter your last name!</div>
                      </div>
=======
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


                      <div class="col-12">
                        <label for="yourPassword" class="form-label">Password</label>
                        <input type="password" name="password" class="form-control" id="yourPassword" required />
                        <div class="invalid-feedback">Please enter your password!</div>
                      </div>

                      <div class="col-12">
                        <label for="yourPassword" class="form-label">Re-enter Password</label>
                        <input type="password" name="password" class="form-control" id="yourPassword" required />
                        <div class="invalid-feedback">Please re-enter your password!</div>
                      </div>

                      <!-- <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required>
                        <label class="form-check-label" for="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                        <div class="invalid-feedback">You must agree before submitting.</div>
                      </div>
                    </div> -->
                      <div class="col-12">
                        <button class="btn btn-primary w-100" type="submit">Create Account</button>
                      </div>
                      <div class="col-12">
                        <p class="small mb-0">
                          Already have an account?
                          <router-link to="http://localhost:8000/login">Login</router-link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
=======
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
        <label>First Name:</label>
        <input type="text" v-model="newUserParams.first_name" required />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" v-model="newUserParams.last_name" required />
      </div>
      <div>
        <label>Job Title:</label>
        <input type="text" v-model="newUserParams.position" required />
      </div>
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
</template>
