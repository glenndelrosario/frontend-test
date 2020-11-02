<template>
  <b-media
    class="main-list-component-container bg-gray my-3 p-4"
    vertical-align="center"
  >
    <template #aside>
      <b-img
        :src="thumbnail ? thumbnail : require('../static/no-photo.jpg')"
        :alt="`${title} Thumbnail`"
        :title="`${title}`"
        width="150"
      ></b-img>
    </template>
    <h5 class="mt-0 mb-3">{{ title }}</h5>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="mb-0 summary-text" v-html="summary"></div>
  </b-media>
</template>

<script>
export default {
  name: 'MainListComponent',
  props: {
    thumbnail: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: 'Title Here',
    },
    summary: {
      type: String,
      default: '<p>Summary</p>',
    },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.main-list-component-container {
  border-radius: $radius-l;
  margin-bottom: 5em;
}
.summary-text {
  font-weight: 500;
  font-size: 0.75rem;
}
</style>
