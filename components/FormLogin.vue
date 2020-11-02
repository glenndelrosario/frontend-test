<template>
  <div class="form-login-component-container px-md-5">
    <p class="h5 text-center mb-5">Log in</p>
    <form>
      <div class="form-group mb-5">
        <input type="email" /><span class="highlight"></span>
        <span class="underline"></span>
        <label>Email Address</label>
      </div>
      <div class="form-group mb-2">
        <input type="password" /><span class="highlight"></span>
        <span class="underline"></span>
        <label>Password</label>
      </div>
      <div class="d-flex justify-content-between">
        <b-form-checkbox
          id="remember-me-input"
          name="remember-me-input"
          value="1"
          class="mt-4"
        >
          <span class="checkbox-text">Remember Me</span>
        </b-form-checkbox>
        <a href="#" class="text-underline text-dark font-weight-light">
          Forgot Password?
        </a>
      </div>
      <div class="d-flex justify-content-between mt-5">
        <b-button pill class="button">Cancel</b-button>
        <nuxt-link to="/main-page">
          <b-button pill class="button bg-gradient">Login</b-button>
        </nuxt-link>
      </div>
      <div class="d-flex justify-content-end font-weight-light mt-2">
        <span>Don’t have an account yet?</span>
        <a href="#" class="ml-4 text-underline text-dark">Sign Up Here</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormLoginComponent',
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
}
</script>
