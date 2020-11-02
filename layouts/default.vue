<template>
  <div>
    <Nuxt />
    <main-footer />
  </div>
</template>
<script>
import MainFooter from '@/components/MainFooter'
export default {
  name: 'DefaultLayout',
  components: {
    MainFooter,
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
}
</script>
