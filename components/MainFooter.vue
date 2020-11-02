<template>
  <footer class="main-footer-component-container fixed-bottom">
    <b-container fluid>
      <b-row align-v="center" align-content="center">
        <b-col cols="12" sm="6">
          <div class="d-flex justify-content-sm-start justify-content-center">
            <span class="mb-1">
              <a class="text-white" href="#">Terms of Services</a>
            </span>
            <span class="ml-4 mb-1">
              <a class="text-white" href="#">Contact us</a>
            </span>
          </div>
        </b-col>
        <b-col cols="12" sm="6">
          <div class="d-flex justify-content-sm-end justify-content-center">
            <ul class="list-inline p-0 m-0">
              <li class="list-inline-item">
                <nuxt-link to="/" class="nav-link">
                  <img src="/icons/facebook.svg" width="20" height="20" />
                </nuxt-link>
              </li>
              <li class="list-inline-item">
                <nuxt-link to="/" class="nav-link">
                  <img src="/icons/twitter.svg" width="20" height="20" />
                </nuxt-link>
              </li>
              <li class="list-inline-item">
                <nuxt-link to="/alternate" class="nav-link">
                  <img src="/icons/instagram.svg" width="20" height="20" />
                </nuxt-link>
              </li>
              <li class="list-inline-item">
                <nuxt-link to="/" class="nav-link">
                  <img src="/icons/soundcloud.svg" width="20" height="20" />
                </nuxt-link>
              </li>
              <li class="list-inline-item">
                <nuxt-link to="/" class="nav-link">
                  <img src="/icons/spotify.svg" width="20" height="20" />
                </nuxt-link>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<script>
export default {
  name: 'MainFooterComponent',
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.main-footer-component-container {
  background: $background;
  font-size: 0.75rem;
  height: 5.9375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    height: 3.125rem;
  }
  .list-inline-item:not(:last-child) {
    margin-right: 0 !important;
  }
}
</style>
